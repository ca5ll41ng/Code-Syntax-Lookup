---
id: "python-zh-function-time-pthread_getcpuclockid"
language: "python"
lang: "zh"
category: "function"
name: "pthread_getcpuclockid"
signature: "pthread_getcpuclockid(thread_id, /)"
directive: "function"
module: "time"
source_url: "https://docs.python.org/zh-cn/3/library/time.html#time.pthread_getcpuclockid"
license: "PSF"
updated: "2026-10-01"
---

# pthread_getcpuclockid

返回指定的 *thread_id* 的特定于线程的CPU时间时钟的 *clk_id* 。

Use `threading.get_ident` or the `~threading.Thread.ident`
attribute of `threading.Thread` objects to get a suitable value
for *thread_id*.

> **Warning**
>
> Passing an invalid or expired *thread_id* may result in
> undefined behavior, such as segmentation fault.
>

availability:: Unix

> *Added in 3.7*
