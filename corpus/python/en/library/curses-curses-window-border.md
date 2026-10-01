---
id: "python-en-function-curses-window-border"
language: "python"
lang: "en"
category: "function"
name: "window.border"
signature: "window.border([ls[, rs[, ts[, bs[, tl[, tr[, bl[, br]]]]]]]])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.border"
license: "PSF"
updated: "2026-10-01"
---

# window.border

Draw a border around the edges of the window. Each parameter specifies  the
character to use for a specific part of the border; see the table below for more
details.

> **Note**
>
> A `0` value for any parameter will cause the default character to be used for
> that parameter.  Keyword parameters can *not* be used.  The defaults are listed
> in this table:
>

+-----------+---------------------+-----------------------+------------------------+
 Parameter  Description          Default value          Wide default value     
+===========+=====================+=======================+========================+
 *ls*       Left side            `ACS_VLINE`     `WACS_VLINE`    
+-----------+---------------------+-----------------------+------------------------+
 *rs*       Right side           `ACS_VLINE`     `WACS_VLINE`    
+-----------+---------------------+-----------------------+------------------------+
 *ts*       Top                  `ACS_HLINE`     `WACS_HLINE`    
+-----------+---------------------+-----------------------+------------------------+
 *bs*       Bottom               `ACS_HLINE`     `WACS_HLINE`    
+-----------+---------------------+-----------------------+------------------------+
 *tl*       Upper-left corner    `ACS_ULCORNER`  `WACS_ULCORNER` 
+-----------+---------------------+-----------------------+------------------------+
 *tr*       Upper-right corner   `ACS_URCORNER`  `WACS_URCORNER` 
+-----------+---------------------+-----------------------+------------------------+
 *bl*       Bottom-left corner   `ACS_LLCORNER`  `WACS_LLCORNER` 
+-----------+---------------------+-----------------------+------------------------+
 *br*       Bottom-right corner  `ACS_LRCORNER`  `WACS_LRCORNER` |
+-----------+---------------------+-----------------------+------------------------+

The wide default value is used when the border is drawn from string
characters or `complexchar` cells.

If any parameter is a byte character or an integer other than `0`, the
border is drawn from byte characters, and every string character must be
encodable as a single byte.

> *Changed in next*: Wide and combining characters, and :class:`complexchar` cells, are now accepted.  A single call cannot mix :class:`complexchar` cells with integer or byte characters.
