---
id: "python-en-function-socket-getfqdn"
language: "python"
lang: "en"
category: "function"
name: "getfqdn"
signature: "getfqdn([name])"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.getfqdn"
license: "PSF"
updated: "2026-10-01"
---

# getfqdn

Return a fully qualified domain name for *name*. If *name* is omitted or empty,
it is interpreted as the local host.  To find the fully qualified name, the
hostname returned by `gethostbyaddr` is checked, followed by aliases for the
host, if available.  The first name which includes a period is selected.  In
case no fully qualified domain name is available and *name* was provided,
it is returned unchanged.  If *name* was empty or equal to `'0.0.0.0'`,
the hostname from `gethostname` is returned.
