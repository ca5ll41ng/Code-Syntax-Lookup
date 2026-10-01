---
id: "python-en-function-socket-can_raw_fd_frames"
language: "python"
lang: "en"
category: "function"
name: "CAN_RAW_FD_FRAMES"
directive: "data"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.CAN_RAW_FD_FRAMES"
license: "PSF"
updated: "2026-10-01"
---

# CAN_RAW_FD_FRAMES

Enables CAN FD support in a CAN_RAW socket. This is disabled by default.
This allows your application to send both CAN and CAN FD frames; however,
you must accept both CAN and CAN FD frames when reading from the socket.

This constant is documented in the Linux documentation.

availability:: Linux >= 3.6.

> *Added in 3.5*
