---
id: "python-en-function-socket-eth_p_all"
language: "python"
lang: "en"
category: "function"
name: "ETH_P_ALL"
directive: "data"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.ETH_P_ALL"
license: "PSF"
updated: "2026-10-01"
---

# ETH_P_ALL

`ETH_P_ALL` can be used in the `~socket.socket`
constructor as *proto* for the `AF_PACKET` family in order to
capture every packet, regardless of protocol.

For more information, see the `packet(7)` manpage.

availability:: Linux.

> *Added in 3.12*
