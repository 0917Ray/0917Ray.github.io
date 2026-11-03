---
layout: post
title: "Codex CLI reference"
description: "Everyday Codex CLI usage, session recovery, slash commands, and experimental settings."
permalink: /posts/codex-reference/
date: 2026-11-03 00:00:00 +0800
updated: 2026-11-03
tags: [Tools]
lang: en
translation_key: codex-reference
---

## Start and resume

Run these commands in your terminal, outside an active Codex session:

```bash
codex                    # Start an interactive session in the current directory
codex login              # Sign in
codex -C /path/to/project # Start in a specific project folder
codex resume             # Choose a previous session for the current directory
codex resume --all       # Show sessions across all directories
codex resume --last      # Continue the latest session without the picker
codex --version          # Check the installed CLI version
codex --help             # Show CLI commands and options
```

`--all` removes the directory filter; it does not resume every session at once. To resume the latest session across directories, use `codex resume --last --all`. You can also resume a specific session with `codex resume SESSION_ID`.

## Slash commands

Type these inside the interactive Codex CLI. Type `/` to see the commands available in your installed version; use Tab to autocomplete.

```text
/model                   # Choose a model and reasoning effort
/permissions             # Adjust permissions and approval behavior
/status                  # Check model, approvals, and token usage
/review                  # Review the current code changes
/rename                  # Give the thread a recognizable name
/fork                    # Branch the conversation into a new thread
/skills                  # Browse available skills
/mcp                     # Inspect configured MCP tools
/init                    # Create an AGENTS.md with project guidance
/experimental            # Open the experimental feature settings
```

The permission command is **`/permissions`**, with a final `s`. Available permission choices depend on the environment and its policies. Use `/status` to check the current setup after making changes.

## Experimental options

`/experimental` shows the switches exposed by your CLI version. One verified option is **Prevent sleep while running**, which keeps the computer awake while Codex is running a thread. It does not make a task survive closing the terminal, terminating Codex, or restarting the computer.

The menu changes between releases and may have no options. A feature flag listed by the CLI is not necessarily a switch in this menu. Inspect flags from a regular terminal with:

```bash
codex features list              # List flags, their stages, and effective states
codex features enable FEATURE    # Enable a flag in config.toml (replace FEATURE)
codex features disable FEATURE   # Disable a flag in config.toml
```

For example, to enable the sleep-prevention setting:

```bash
codex features enable prevent_idle_sleep
```

## A simple workflow

1. Run `codex` from the project directory.
2. Describe a small, concrete task: “Fix the inline code spacing in this post and run the site build.”
3. Review the changes and build results.
4. Ask Codex to commit or push when ready. Resume the thread for follow-up changes.

CLI examples were checked against the installed `codex-cli 0.166.0`. Available commands and experimental settings can vary by version.

Official OpenAI documentation for further reading: [CLI reference](https://developers.openai.com/codex/cli/reference/) · [Slash commands](https://developers.openai.com/codex/cli/slash-commands/).
