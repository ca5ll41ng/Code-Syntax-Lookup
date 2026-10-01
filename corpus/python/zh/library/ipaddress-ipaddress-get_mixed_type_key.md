---
id: "python-zh-function-ipaddress-get_mixed_type_key"
language: "python"
lang: "zh"
category: "function"
name: "get_mixed_type_key"
signature: "get_mixed_type_key(obj)"
directive: "function"
module: "ipaddress"
source_url: "https://docs.python.org/zh-cn/3/library/ipaddress.html#ipaddress.get_mixed_type_key"
license: "PSF"
updated: "2026-10-01"
---

# get_mixed_type_key

Return a key suitable for sorting between networks and addresses.  Address
and Network objects are not sortable by default; they're fundamentally
different, so the expression::

  IPv4Address('192.0.2.0') <= IPv4Network('192.0.2.0/24')

doesn't make sense.  There are some times however, where you may wish to
have `ipaddress` sort these anyway.  If you need to do this, you can use
this function as the *key* argument to `sorted`.

*obj* 是一个网络或地址对象。
