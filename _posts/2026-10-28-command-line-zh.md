---
layout: post
author_profile: false
title: "命令行速查"
description: "tmux 与日常终端命令的简明参考。"
permalink: /posts/command-line/zh/
date: 2026-10-28 00:00:00 +0800
updated: 2026-10-30
tags: [Tools]
lang: zh-CN
translation_key: command-line
---

## tmux 基本用法

使用 tmux 在 SSH 断开后保留终端会话。在服务器上执行以下命令：

```bash
tmux new -s train        # 创建名为 train 的会话
tmux ls                  # 列出会话
tmux attach -t train     # 恢复会话
```

使用默认快捷键时，先按 **Ctrl+b**，松开两个键，再按：

| 按键 | 用途 |
| --- | --- |
| `d` | 离开会话，任务继续运行 |
| `c` | 创建新窗口 |
| `n` / `p` | 下一个 / 上一个窗口 |
| `%` / `"` | 左右分屏 / 上下分屏 |
| 方向键 | 切换窗格 |

`exit` 会关闭当前 shell；要保留任务，请按 `Ctrl+b`，松开后再按 `d` 离开会话。

## 日常终端命令

### GPU 监控

```bash
watch -n 1 nvidia-smi    # 每秒刷新 GPU 状态（Ctrl+C 退出）
```

需要 NVIDIA GPU 和可用的驱动。

### Conda 环境

```bash
conda env list           # 列出 Conda 环境
conda activate myenv     # 激活环境（替换 myenv）
conda deactivate         # 退出当前环境
```

使用前需安装 Conda，并在当前 shell 中完成初始化。

### 文件与目录

```bash
pwd                      # 显示当前目录
ls -lah                  # 列出文件，包含隐藏文件
cd /path/to/project      # 切换目录
cd ..                    # 回到上一级目录
```

### 脚本与日志

```bash
python train.py          # 运行 Python 脚本
tail -f train.log        # 持续查看日志（Ctrl+C 退出）
```

### 进程管理

```bash
ps -u "$USER" -f         # 查看自己的进程及 PID
pgrep -af 'train.py'     # 按脚本名称查找进程
top                      # 查看进程（P：CPU，M：内存，q：退出）
htop                     # 交互式进程查看（F3：搜索，F6：排序，F10：退出）
kill PID                 # 请求终止进程（将 PID 替换为进程编号）
kill -9 PID              # 仅在普通 kill 无效时强制终止
```

在 `top` 中使用大写 `P` 或 `M`（Shift+p / Shift+m）。在 `htop` 中用方向键选择进程，按 `F9` 打开发送信号菜单。`htop` 可能需要额外安装。

使用 `kill` 前先核对 PID 和对应命令。强制终止会跳过程序的清理步骤。
