---
id: "python-zh-function-ssl-cert_time_to_seconds"
language: "python"
lang: "zh"
category: "function"
name: "cert_time_to_seconds"
signature: "cert_time_to_seconds(cert_time)"
directive: "function"
module: "ssl"
source_url: "https://docs.python.org/zh-cn/3/library/ssl.html#ssl.cert_time_to_seconds"
license: "PSF"
updated: "2026-10-01"
---

# cert_time_to_seconds

Return the time in seconds since the epoch, given the `cert_time`
string representing the "notBefore" or "notAfter" date from a
certificate in `"%b %d %H:%M:%S %Y %Z"` strptime format (C
locale).

以下为示例代码：

```python

>>> import ssl
>>> import datetime as dt
>>> timestamp = ssl.cert_time_to_seconds("Jan  5 09:34:43 2018 GMT")
>>> timestamp  # doctest: +SKIP
1515144883
>>> print(dt.datetime.fromtimestamp(timestamp, dt.UTC))  # doctest: +SKIP
2018-01-05 09:34:43+00:00
```

"notBefore" 或 "notAfter" 日期值必须使用 GMT (:rfc:`5280`)。

> *Changed in 3.5*: Interpret the input time as a time in UTC as specified by 'GMT' timezone in the input string. Local timezone was used previously. Return an integer (no fractions of a second in the input format)
