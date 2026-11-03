---
layout: post
author_profile: false
title: "LaTeX 图片排版速查"
description: "LaTeX 中单张图片与两张图片并排排版的示例。"
permalink: /posts/figure-reference/zh/
date: 2026-11-02 00:00:00 +0800
updated: 2026-11-02
tags: [Tools]
lang: zh-CN
translation_key: figure-reference
---

以下示例适用于单栏文档。请将 PDF 文件名替换为自己的图片路径。示例中的图片标题保留英文，可按需修改；若改用中文标题，文档模板需支持中文排版。

## 所需宏包

在导言区（`\begin{document}` 之前）添加：

```latex
\usepackage{graphicx}     % 插入图片
\usepackage{subcaption}   % 使用子图及独立标题
\usepackage{float}        % 启用 [H] 位置选项
```

## 单张图片

```latex
\begin{figure}[H]
    \centering
    \includegraphics[width=0.8\linewidth]{figure.pdf}
    \caption{Description of the figure.}
    \label{fig:single}
\end{figure}
```

修改 `0.8\linewidth` 可调整图片宽度；`\linewidth` 表示当前可用行宽。将 `\label` 放在 `\caption` 后面，然后使用 `Figure~\ref{fig:single}` 引用图片。

## 两张图片并排

```latex
\begin{figure}[H]
    \centering
    \begin{subfigure}{0.48\textwidth}
        \centering
        % 这里的 \linewidth 表示当前 subfigure 内部的宽度
        \includegraphics[width=\linewidth]{figure_left.pdf}
        \caption{Description of the left image.}
        \label{fig:left}
    \end{subfigure}
    \hfill % 在两张图片之间留白
    \begin{subfigure}{0.48\textwidth}
        \centering
        \includegraphics[width=\linewidth]{figure_right.pdf}
        \caption{Description of the right image.}
        \label{fig:right}
    \end{subfigure}
    \caption{Two images in one row in a single-column document.}
    \label{fig:two_figs}
\end{figure}
```

每张子图占正文宽度的 `48%`，为中间的 `\hfill` 留出空间。两张子图的总宽度应小于可用宽度，子图之间不要插入空行，否则会另起一段。

使用 `Figure~\ref{fig:two_figs}` 引用整张图；使用 `Figure~\ref{fig:two_figs}\subref{fig:left}` 引用左侧子图，通常显示为“Figure 1(a)”。

`[H]` 将图片放在正文当前位置，需要 `float` 宏包。当前页空间不足时，图片会移至下一页，可能留下空白。双栏论文中，若在单栏内并排两张子图，子图宽度使用 `0.48\linewidth`；若需要跨越双栏，则使用 `figure*` 和 `[t]`，而不是 `[H]`。添加 `subcaption` 前，请检查论文模板对图片标题的要求。
