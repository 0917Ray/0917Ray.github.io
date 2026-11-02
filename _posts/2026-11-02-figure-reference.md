---
layout: post
title: "Figure reference"
description: "LaTeX examples for a single figure and two figures side by side."
permalink: /posts/figure-reference/
date: 2026-11-02 00:00:00 +0800
updated: 2026-11-02
category: "Tools"
lang: en
---

Examples for a single-column document. Replace the PDF filenames with your own image paths.

## Required packages

Add these to the preamble, before `\begin{document}`:

```latex
\usepackage{graphicx}     % Include images
\usepackage{subcaption}   % Add subfigures and individual captions
\usepackage{float}        % Enable the [H] placement option
```

## One image

```latex
\begin{figure}[H]
    \centering
    \includegraphics[width=0.8\linewidth]{figure.pdf}
    \caption{Description of the figure.}
    \label{fig:single}
\end{figure}
```

Change `0.8\linewidth` to adjust the image width; `\linewidth` fills the available line width. Place `\label` after `\caption`, then reference the figure with `Figure~\ref{fig:single}`.

## Two images side by side

```latex
\begin{figure}[H]
    \centering
    \begin{subfigure}{0.48\textwidth}
        \centering
        % Here, \linewidth is the width of this subfigure
        \includegraphics[width=\linewidth]{figure_left.pdf}
        \caption{Description of the left image.}
        \label{fig:left}
    \end{subfigure}
    \hfill % Leave space between the two images
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

Each subfigure takes `48%` of the text width, leaving room for `\hfill` between them. Keep the two subfigure widths below the total available width and avoid a blank line between the subfigures, which would start a new paragraph.

Use `Figure~\ref{fig:two_figs}` for the whole figure, or `Figure~\ref{fig:two_figs}\subref{fig:left}` for the left panel, typically shown as “Figure 1(a)”.

`[H]` places the figure at this point in the text rather than letting it float; it requires the `float` package. If there is not enough space, the figure moves to the next page and may leave a gap. In a two-column paper, use `0.48\linewidth` for two panels within one column. To span both columns, use `figure*` with `[t]` instead of `[H]`. Check the paper template's caption requirements before adding `subcaption`.
