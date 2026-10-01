---
id: "python-zh-function-selectors-selectors"
language: "python"
lang: "zh"
category: "function"
name: "selectors"
title: "Examples"
directive: "module"
module: "selectors"
source_url: "https://docs.python.org/zh-cn/3/library/selectors.html#module-selectors"
license: "PSF"
updated: "2026-10-01"
---

# Examples

**Examples**

下面是一个简单的回显服务器实现::

   import selectors
   import socket

   sel = selectors.DefaultSelector()

   def accept(sock, mask):
       conn, addr = sock.accept()  # Should be ready
       print('accepted', conn, 'from', addr)
       conn.setblocking(False)
       sel.register(conn, selectors.EVENT_READ, read)

   def read(conn, mask):
       data = conn.recv(1000)  # Should be ready
       if data:
           print('echoing', repr(data), 'to', conn)
           conn.send(data)  # Hope it won't block
       else:
           print('closing', conn)
           sel.unregister(conn)
           conn.close()

   sock = socket.socket()
   sock.bind(('localhost', 1234))
   sock.listen(100)
   sock.setblocking(False)
   sel.register(sock, selectors.EVENT_READ, accept)

   while True:
       events = sel.select()
       for key, mask in events:
           callback = key.data
           callback(key.fileobj, mask)
