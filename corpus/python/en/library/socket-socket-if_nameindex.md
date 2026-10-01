---
id: "python-en-function-socket-if_nameindex"
language: "python"
lang: "en"
category: "function"
name: "if_nameindex"
signature: "if_nameindex()"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.if_nameindex"
license: "PSF"
updated: "2026-10-01"
---

# if_nameindex

Return a list of network interface information
(index int, name string) tuples.
`OSError` if the system call fails.

availability:: Unix, Windows, not WASI.

> *Added in 3.3*

> *Changed in 3.8*: Windows support was added.

> **Note**
>
> On Windows network interfaces have different names in different contexts
> (all names are examples):
>
> * UUID: `{FB605B73-AAC2-49A6-9A2F-25416AEA0573}`
> * name: `ethernet_32770`
> * friendly name: `vEthernet (nat)`
> * description: `Hyper-V Virtual Ethernet Adapter`
>
> This function returns names of the second form from the list, `ethernet_32770`
> in this example case.
>
