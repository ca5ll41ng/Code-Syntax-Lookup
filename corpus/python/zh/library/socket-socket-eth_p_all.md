---
id: "python-zh-function-socket-eth_p_all"
language: "python"
lang: "zh"
category: "function"
name: "ETH_P_ALL"
directive: "data"
module: "socket"
source_url: "https://docs.python.org/zh-cn/3/library/socket.html#socket.ETH_P_ALL"
license: "PSF"
updated: "2026-10-01"
---

# ETH_P_ALL

`ETH_P_ALL` can be used in the `~socket.socket`
constructor as *proto* for the `AF_PACKET` family in order to
capture every packet, regardless of protocol.

要了解详情，请参阅 :manpage:`packet(7)` 手册页。

availability:: Linux.

> *Added in 3.12*
