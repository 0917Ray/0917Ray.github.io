---
layout: post
title: "Command-line reference"
description: "Common Linux commands for GPUs, tmux, files, processes, logs, and remote access."
permalink: /posts/command-line/
redirect_from:
  - /wiki/command-line/
date: 2026-10-28 00:00:00 +0800
updated: 2026-10-28
category: "Tools"
lang: en
---

Commands I use for working on Linux servers and running experiments. Replace usernames, hosts, paths, session names, and process IDs with your own. Quote paths containing spaces. Tools such as `tmux`, `rsync`, and `htop` need to be installed first.

## Contents
{:.no_toc}

* Contents
{:toc}

## GPUs: nvidia-smi

Run these on a server with an NVIDIA GPU and a working NVIDIA driver.

| Command | What it does |
| --- | --- |
| `nvidia-smi` | Show GPU utilization, memory usage, and GPU processes |
| `nvidia-smi -l 1` | Refresh every second; press `Ctrl+C` to stop |
| `nvidia-smi -i 0` | Show GPU 0 only |
| `nvidia-smi -L` | List GPU models and UUIDs |

Query specific metrics as CSV:

```bash
nvidia-smi --query-gpu=index,name,utilization.gpu,memory.used,memory.total,temperature.gpu --format=csv
```

Choose which GPUs a program can see (physical GPUs 0 and 1 here):

```bash
CUDA_VISIBLE_DEVICES=0,1 python train.py
```

This variable applies to this command only and does not reserve the GPUs. The program will typically refer to the visible devices as GPU 0 and GPU 1. The CUDA Version shown by `nvidia-smi` is the maximum CUDA version supported by the driver. To check the installed CUDA Toolkit, use `nvcc --version` if the toolkit is installed and on your PATH.

## Terminal sessions: tmux

Use tmux to keep a task running when SSH disconnects. Log in to the server first, then create the tmux session there. Sessions do not survive a server reboot.

### Create, detach, and attach

```bash
tmux new -s train          # Create and enter a session named train
```

Start your task inside the session. To detach, press `Ctrl+b`, release both keys, then press `d`. The task keeps running. These shortcuts assume the default tmux configuration.

```bash
tmux ls                   # List sessions
tmux attach -t train      # Reattach to the train session
```

`exit` closes the current shell. If it is the last pane in the session, the session ends too. Detach when you want to leave a task running.

### Keyboard shortcuts

For each shortcut below, **press `Ctrl+b`, release it, then press the listed key**. A window is a separate terminal view; a pane is a split within a window.

| Key | Action |
| --- | --- |
| `d` | Detach from the session |
| `c` | Create a window |
| `n` / `p` | Next / previous window |
| `0`–`9` | Switch to a window by number |
| `%` | Split into left and right panes |
| `"` | Split into top and bottom panes |
| Arrow keys | Move between panes |
| `z` | Zoom the current pane / restore the layout |
| `[` | Enter copy mode to scroll; press `q` to leave with the default bindings |
| `?` | Show key bindings; press `q` to close |

Letters are lowercase: no Shift is needed. For `%` and `"`, type the symbol itself.

End a specific session:

```bash
tmux kill-session -t train
```

This closes the session and may terminate its tasks. Check the session name first.

## Files and directories

| Command | What it does |
| --- | --- |
| `pwd` | Print the current directory |
| `ls -lah` | List files, including hidden files, with readable sizes |
| `cd /path/to/project` | Change directory |
| `cd ..` / `cd -` | Go to the parent / previous directory |
| `mkdir -p runs/exp01` | Create a directory and any missing parents |
| `cp config.yaml config.backup.yaml` | Copy a file; may overwrite an existing destination |
| `cp -r source_dir backup_dir` | Copy a directory recursively; the result depends on whether the destination already exists |
| `mv old_name new_name` | Move or rename; may overwrite an existing destination |
| `du -sh ./runs` | Show the total disk space used by a directory |
| `df -h` | Show filesystem capacity and free space |

Find files and search text:

```bash
find . -type f -name '*.log'          # Find log files under the current directory
grep -n 'loss' train.log              # Find matching lines and show line numbers
grep -R -n --include='*.py' 'seed' .  # Search Python files for seed
```

If ripgrep is installed, `rg -n 'seed' -g '*.py'` is a faster alternative. By default, it respects `.gitignore` and skips hidden files.

## Processes and logs

| Command | What it does |
| --- | --- |
| `top` | Monitor processes, CPU, and memory; press `q` to quit |
| `htop` | Interactive process viewer; requires a separate installation |
| `ps -u "$USER" -o pid,etime,%cpu,%mem,args` | List your processes, elapsed time, and resource usage |
| `pgrep -af 'train.py'` | Find processes by their full command line |
| `tail -n 50 train.log` | Show the last 50 lines of a log |
| `tail -f train.log` | Follow new log output; press `Ctrl+C` to stop viewing |
| `less train.log` | Browse a log; use `/keyword` to search and `q` to quit |
| `kill PID` | Send a termination signal (SIGTERM) to a process |

`Ctrl+C` usually interrupts the foreground program. With `tail -f`, it stops viewing the log; with a training script, it usually interrupts training. Check the PID and command before terminating a process.

Write Python output and errors to the same log:

```bash
python -u train.py > train.log 2>&1
```

`-u` reduces Python output buffering so logs appear promptly. `>` overwrites the log; use `>>` to append. This command still runs in the foreground and can be used inside tmux.

## SSH and file transfer

Log in to a server. SSH uses port 22 by default; use lowercase `-p` for another port:

```bash
ssh username@server.example.com
ssh -p 2222 username@server.example.com
```

Run the following transfer commands in your **local terminal**. The port option for `scp` is uppercase `-P`.

```bash
# Upload a local file
scp -P 2222 ./config.yaml username@server.example.com:~/project/

# Download a remote file to the current local directory
scp -P 2222 username@server.example.com:~/project/train.log ./

# Sync a local directory's contents; rsync must be installed on both ends
rsync -avh --progress -e 'ssh -p 2222' ./project/ username@server.example.com:~/project/
```

The trailing `/` on the rsync source means copy the directory's contents. Add `--dry-run` to preview changes. This command updates matching files without deleting files that exist only at the destination.

## Help and shell shortcuts

| Command / key | What it does |
| --- | --- |
| `man tmux` | Open the manual; press `q` to quit |
| `nvidia-smi --help` | Show command help |
| `history` | Show shell command history |
| `Ctrl+R` | Search command history in common Bash / Zsh configurations |
| `Tab` | Complete a command or path |
| `Ctrl+A` / `Ctrl+E` | Move to the start / end of the line in Emacs key mode |
| `Ctrl+L` | Clear the screen while keeping the current input |

Further reading: [NVIDIA System Management Interface](https://docs.nvidia.com/deploy/nvidia-smi/) · [tmux Getting Started](https://github.com/tmux/tmux/wiki/Getting-Started)
