---
layout: post
title: "Command-line reference"
description: "A short reference for tmux and everyday terminal commands."
permalink: /posts/command-line/
redirect_from:
  - /wiki/command-line/
date: 2026-10-28 00:00:00 +0800
updated: 2026-10-30
category: "Tools"
lang: en
---

## Basic tmux usage

Keep a terminal session running after disconnecting from SSH. Run these commands on the server:

```bash
tmux new -s train        # Create a session named train
tmux ls                  # List sessions
tmux attach -t train     # Reattach to the session
```

With the default bindings, press **Ctrl+b**, release both keys, then press:

| Key | Action |
| --- | --- |
| `d` | Detach and leave the task running |
| `c` | Create a new window |
| `n` / `p` | Next / previous window |
| `%` / `"` | Split left–right / top–bottom |
| Arrow keys | Switch panes |

Use `exit` to close the current shell; detach with `Ctrl+b`, then `d` when you want to keep it running.

## Everyday terminal commands

### GPU monitoring

```bash
watch -n 1 nvidia-smi    # Refresh GPU status every second (Ctrl+C to stop)
```

Requires an NVIDIA GPU and driver.

### Conda environments

```bash
conda env list           # List Conda environments
conda activate myenv     # Activate an environment (replace myenv)
conda deactivate         # Leave the current environment
```

Assumes Conda is installed and initialized in your shell.

### Files and navigation

```bash
pwd                      # Show the current directory
ls -lah                  # List files, including hidden files
cd /path/to/project      # Change directory
cd ..                    # Go up one directory
```

### Scripts and logs

```bash
python train.py          # Run a Python script
tail -f train.log        # Follow a log file (Ctrl+C to stop)
```

### Processes

```bash
ps -u "$USER" -f          # List your processes and their PIDs
pgrep -af 'train.py'      # Find processes matching the script name
top                      # Monitor processes (P: CPU, M: memory, q: quit)
htop                     # Interactive monitor (F3: search, F6: sort, F10: quit)
kill PID                 # Request termination (replace PID with the process ID)
kill -9 PID              # Force termination only if normal kill does not work
```

In `top`, use uppercase `P` or `M` (Shift+p / Shift+m). In `htop`, use the arrow keys to select a process; `F9` opens the signal menu. `htop` may need to be installed first.

Check the PID and command before using `kill`. Forced termination skips cleanup.
