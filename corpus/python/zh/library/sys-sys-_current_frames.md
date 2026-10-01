---
id: "python-zh-function-sys-_current_frames"
language: "python"
lang: "zh"
category: "function"
name: "_current_frames"
signature: "_current_frames()"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/zh-cn/3/library/sys.html#sys._current_frames"
license: "PSF"
updated: "2026-10-01"
---

# _current_frames

Return a dictionary mapping each thread's identifier to the topmost stack frame
currently active in that thread at the time the function is called. Note that
functions in the `traceback` module can build the call stack given such a
frame.

This is most useful for debugging deadlock:  this function does not require the
deadlocked threads' cooperation, and such threads' call stacks are frozen for as
long as they remain deadlocked.  The frame returned for a non-deadlocked thread
may bear no relationship to that thread's current activity by the time calling
code examines the frame.

这个函数应该只在内部为了一些特定的目的使用。

audit-event:: sys._current_frames "" sys._current_frames
