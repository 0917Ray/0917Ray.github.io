---
layout: post
author_profile: false
title: "Codex CLI 使用速查"
description: "Codex CLI 的日常用法、会话恢复、斜杠命令与实验设置。"
permalink: /posts/codex-reference/zh/
date: 2026-11-03 00:00:00 +0800
updated: 2026-11-03
tags: [Tools]
lang: zh-CN
translation_key: codex-reference
---

## 启动与恢复会话

在普通终端中执行以下命令，而不是在 Codex 会话输入框中执行：

```bash
codex                    # 在当前目录启动交互会话
codex login              # 登录
codex -C /path/to/project# 在指定项目目录启动
codex resume             # 选择当前目录的历史会话
codex resume --all       # 显示所有目录的历史会话
codex resume --last      # 直接继续最近一次会话
codex --version          # 查看已安装的 CLI 版本
codex --help             # 查看 CLI 命令和选项
```

`--all` 会取消目录筛选，并不是同时恢复所有会话。跨目录恢复最近一次会话可用 `codex resume --last --all`；也可以用 `codex resume SESSION_ID` 恢复指定会话。

## 斜杠命令

在 Codex CLI 交互会话中输入以下命令。输入 `/` 查看当前版本提供的命令，按 Tab 自动补全。

```text
/model                   # 选择模型和推理强度
/permissions             # 调整权限及审批行为
/status                  # 查看模型、审批设置和 token 使用情况
/review                  # 审查当前代码改动
/rename                  # 为会话重命名
/fork                    # 从当前对话分出新会话
/skills                  # 查看可用技能
/mcp                     # 查看已配置的 MCP 工具
/init                    # 创建项目指导文件 AGENTS.md
/experimental            # 打开实验功能设置
```

权限命令是 **`/permissions`**，结尾有 `s`。可用权限选项取决于运行环境和策略。修改后可用 `/status` 检查当前设置。

## 实验选项

`/experimental` 显示当前 CLI 版本提供的实验开关。已确认的选项之一是 **Prevent sleep while running**：在 Codex 运行任务时防止电脑休眠。它不能让任务在关闭终端、终止 Codex 或重启电脑后继续运行。

菜单随版本变化，也可能没有可选项。CLI 列出的功能标志不一定会出现在此菜单中。在普通终端中可使用：

```bash
codex features list      # 查看功能标志、阶段及当前状态
codex features enable FEATURE# 在 config.toml 中启用功能（替换 FEATURE）
codex features disable FEATURE# 在 config.toml 中关闭功能
```

例如，启用防休眠设置：

```bash
codex features enable prevent_idle_sleep
```

## 一个简单的工作流程

1. 在项目目录运行 `codex`。
2. 描述一个具体的小任务，例如：“修复这篇文章的行内代码间距，并运行网站构建。”
3. 检查代码改动和构建结果。
4. 确认后让 Codex 提交或推送。后续修改可以恢复同一会话继续进行。

以上 CLI 示例依据已安装的 `codex-cli 0.166.0` 核实。可用命令和实验设置可能随版本变化。

延伸阅读：OpenAI 官方文档： [CLI 参考](https://developers.openai.com/codex/cli/reference/) · [斜杠命令](https://developers.openai.com/codex/cli/slash-commands/).
