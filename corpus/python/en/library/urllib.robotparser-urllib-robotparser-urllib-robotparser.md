---
id: "python-en-function-urllib-robotparser-urllib-robotparser"
language: "python"
lang: "en"
category: "function"
name: "urllib.robotparser"
title: "The following example demonstrates basic use of the `RobotFileParser`"
directive: "module"
module: "urllib.robotparser"
source_url: "https://docs.python.org/3/library/urllib.robotparser.html#module-urllib.robotparser"
license: "PSF"
updated: "2026-10-01"
---

# The following example demonstrates basic use of the `RobotFileParser`

The following example demonstrates basic use of the `RobotFileParser`
class::

   >>> import urllib.robotparser
   >>> rp = urllib.robotparser.RobotFileParser()
   >>> rp.set_url("http://www.pythontest.net/robots.txt")
   >>> rp.read()
   >>> rrate = rp.request_rate("*")
   >>> rrate.requests
   1
   >>> rrate.seconds
   1
   >>> rp.crawl_delay("*")
   6
   >>> rp.can_fetch("*", "http://www.pythontest.net/")
   True
   >>> rp.can_fetch("*", "http://www.pythontest.net/no-robots-here/")
   False

The following example demonstrates use of a `urllib.request.Request`
object with additional user-agent headers populated::

   >>> import urllib.robotparser
   >>> import urllib.request
   >>> rp = urllib.robotparser.RobotFileParser()
   >>> rp.set_url(urllib.request.Request("http://www.pythontest.net/robots.txt", headers={"User-Agent": "IsraBot"}))
   >>> rp.read()
   >>> rp.can_fetch("*", "http://www.pythontest.net/")
   True
   >>> rp.can_fetch("*", "http://www.pythontest.net/no-robots-here/")
   False
