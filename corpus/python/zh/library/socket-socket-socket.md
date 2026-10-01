---
id: "python-zh-function-socket-socket"
language: "python"
lang: "zh"
category: "function"
name: "socket"
title: "Notes on socket timeouts"
directive: "module"
module: "socket"
source_url: "https://docs.python.org/zh-cn/3/library/socket.html#module-socket"
license: "PSF"
updated: "2026-10-01"
---

# Notes on socket timeouts

.. _socket-timeouts:

**Notes on socket timeouts**

A socket object can be in one of three modes: blocking, non-blocking, or
timeout.  Sockets are by default always created in blocking mode, but this
can be changed by calling `setdefaulttimeout`.

* In *blocking mode*, operations block until complete or the system returns
  an error (such as connection timed out).

* In *non-blocking mode*, operations fail (with an error that is unfortunately
  system-dependent) if they cannot be completed immediately: functions from the
  `select` module can be used to know when and whether a socket is available
  for reading or writing.

* In *timeout mode*, operations fail if they cannot be completed within the
  timeout specified for the socket (they raise a `timeout` exception)
  or if the system returns an error.

> **Note**
>
> At the operating system level, sockets in *timeout mode* are internally set
> in non-blocking mode.  Also, the blocking and timeout modes are shared between
> file descriptors and socket objects that refer to the same network endpoint.
> This implementation detail can have visible consequences if e.g. you decide
> to use the `~socket.fileno` of a socket.
>

**Timeouts and the `connect` method**

The `~socket.connect` operation is also subject to the timeout
setting, and in general it is recommended to call `~socket.settimeout`
before calling `~socket.connect` or pass a timeout parameter to
`create_connection`.  However, the system network stack may also
return a connection timeout error of its own regardless of any Python socket
timeout setting.

**Timeouts and the `accept` method**

If `getdefaulttimeout` is not `None`, sockets returned by
the `~socket.accept` method inherit that timeout.  Otherwise, the
behaviour depends on settings of the listening socket:

* if the listening socket is in *blocking mode* or in *timeout mode*,
  the socket returned by `~socket.accept` is in *blocking mode*;

* if the listening socket is in *non-blocking mode*, whether the socket
  returned by `~socket.accept` is in blocking or non-blocking mode
  is operating system-dependent.  If you want to ensure cross-platform
  behaviour, it is recommended you manually override this setting.

.. _socket-example:

**Example**

Here are four minimal example programs using the TCP/IP protocol: a server that
echoes all data that it receives back (servicing only one client), and a client
using it.  Note that a server must perform the sequence `~socket.socket`,
`~socket.bind`, `~socket.listen`, `~socket.accept` (possibly
repeating the `~socket.accept` to service more than one client), while a
client only needs the sequence `~socket.socket`, `~socket.connect`.  Also
note that the server does not `~socket.sendall`/`~socket.recv` on
the socket it is listening on but on the new socket returned by
`~socket.accept`.

前两个示例仅支持 IPv4。 ::

   # Echo server program
   import socket

   HOST = ''                 # Symbolic name meaning all available interfaces
   PORT = 50007              # Arbitrary non-privileged port
   with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
       s.bind((HOST, PORT))
       s.listen(1)
       conn, addr = s.accept()
       with conn:
           print('Connected by', addr)
           while True:
               data = conn.recv(1024)
               if not data: break
               conn.sendall(data)

::

   # Echo client program
   import socket

   HOST = 'daring.cwi.nl'    # The remote host
   PORT = 50007              # The same port as used by the server
   with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
       s.connect((HOST, PORT))
       s.sendall(b'Hello, world')
       data = s.recv(1024)
   print('Received', repr(data))

The next two examples are identical to the above two, but support both IPv4 and
IPv6. The server side will listen to the first address family available (it
should listen to both instead). On most of IPv6-ready systems, IPv6 will take
precedence and the server may not accept IPv4 traffic. The client side will try
to connect to all the addresses returned as a result of the name resolution, and
sends traffic to the first one connected successfully. ::

   # Echo server program
   import socket
   import sys

   HOST = None               # Symbolic name meaning all available interfaces
   PORT = 50007              # Arbitrary non-privileged port
   s = None
   for res in socket.getaddrinfo(HOST, PORT, socket.AF_UNSPEC,
                                 socket.SOCK_STREAM, 0, socket.AI_PASSIVE):
       af, socktype, proto, canonname, sa = res
       try:
           s = socket.socket(af, socktype, proto)
       except OSError as msg:
           s = None
           continue
       try:
           s.bind(sa)
           s.listen(1)
       except OSError as msg:
           s.close()
           s = None
           continue
       break
   if s is None:
       print('could not open socket')
       sys.exit(1)
   conn, addr = s.accept()
   with conn:
       print('Connected by', addr)
       while True:
           data = conn.recv(1024)
           if not data: break
           conn.send(data)

::

   # Echo client program
   import socket
   import sys

   HOST = 'daring.cwi.nl'    # The remote host
   PORT = 50007              # The same port as used by the server
   s = None
   for res in socket.getaddrinfo(HOST, PORT, socket.AF_UNSPEC, socket.SOCK_STREAM):
       af, socktype, proto, canonname, sa = res
       try:
           s = socket.socket(af, socktype, proto)
       except OSError as msg:
           s = None
           continue
       try:
           s.connect(sa)
       except OSError as msg:
           s.close()
           s = None
           continue
       break
   if s is None:
       print('could not open socket')
       sys.exit(1)
   with s:
       s.sendall(b'Hello, world')
       data = s.recv(1024)
   print('Received', repr(data))

The next example shows how to write a very simple network sniffer with raw
sockets on Windows. The example requires administrator privileges to modify
the interface::

   import socket

   # the public network interface
   HOST = socket.gethostbyname(socket.gethostname())

   # create a raw socket and bind it to the public interface
   s = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_IP)
   s.bind((HOST, 0))

   # Include IP headers
   s.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)

   # receive all packets
   s.ioctl(socket.SIO_RCVALL, socket.RCVALL_ON)

   # receive a packet
   print(s.recvfrom(65565))

   # disabled promiscuous mode
   s.ioctl(socket.SIO_RCVALL, socket.RCVALL_OFF)

The next example shows how to use the socket interface to communicate to a CAN
network using the raw socket protocol. To use CAN with the broadcast
manager protocol instead, open a socket with::

    socket.socket(socket.AF_CAN, socket.SOCK_DGRAM, socket.CAN_BCM)

After binding (`CAN_RAW`) or connecting (`CAN_BCM`) the socket, you
can use the `socket.send` and `socket.recv` operations (and
their counterparts) on the socket object as usual.

最后一个例子可能需要特别的权限::

   import socket
   import struct

   # CAN frame packing/unpacking (see 'struct can_frame' in <linux/can.h>)

   can_frame_fmt = "=IB3x8s"
   can_frame_size = struct.calcsize(can_frame_fmt)

   def build_can_frame(can_id, data):
       can_dlc = len(data)
       data = data.ljust(8, b'\x00')
       return struct.pack(can_frame_fmt, can_id, can_dlc, data)

   def dissect_can_frame(frame):
       can_id, can_dlc, data = struct.unpack(can_frame_fmt, frame)
       return (can_id, can_dlc, data[:can_dlc])

   # create a raw socket and bind it to the 'vcan0' interface
   s = socket.socket(socket.AF_CAN, socket.SOCK_RAW, socket.CAN_RAW)
   s.bind(('vcan0',))

   while True:
       cf, addr = s.recvfrom(can_frame_size)

       print('Received: can_id=%x, can_dlc=%x, data=%s' % dissect_can_frame(cf))

       try:
           s.send(cf)
       except OSError:
           print('Error sending CAN frame')

       try:
           s.send(build_can_frame(0x01, b'\x01\x02\x03'))
       except OSError:
           print('Error sending CAN frame')

Running an example several times with too small delay between executions, could
lead to this error::

   OSError: [Errno 98] Address already in use

This is because the previous execution has left the socket in a `TIME_WAIT`
state, and can't be immediately reused.

There is a `socket` flag to set, in order to prevent this,
`socket.SO_REUSEADDR`::

   s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
   s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
   s.bind((HOST, PORT))

the `SO_REUSEADDR` flag tells the kernel to reuse a local socket in
`TIME_WAIT` state, without waiting for its natural timeout to expire.

> **Seealso**
>
> 关于套接字编程（C 语言）的介绍，请参阅以下文章：
>
> - *An Introductory 4.3BSD Interprocess Communication Tutorial*, by Stuart Sechrest
>
> - *An Advanced 4.3BSD Interprocess Communication Tutorial*, by Samuel J.  Leffler et
>   al,
>
> both in the UNIX Programmer's Manual, Supplementary Documents 1 (sections
> PS1:7 and PS1:8).  The platform-specific reference material for the various
> socket-related system calls are also a valuable source of information on the
> details of socket semantics.  For Unix, refer to the manual pages; for Windows,
> see the WinSock (or Winsock 2) specification.  For IPv6-ready APIs, readers may
> want to refer to RFC 3493 titled Basic Socket Interface Extensions for IPv6.
>
