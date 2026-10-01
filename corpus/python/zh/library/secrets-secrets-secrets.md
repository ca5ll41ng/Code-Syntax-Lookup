---
id: "python-zh-function-secrets-secrets"
language: "python"
lang: "zh"
category: "function"
name: "secrets"
title: "Recipes and best practices"
directive: "module"
module: "secrets"
source_url: "https://docs.python.org/zh-cn/3/library/secrets.html#module-secrets"
license: "PSF"
updated: "2026-10-01"
---

# Recipes and best practices

**Recipes and best practices**

This section shows recipes and best practices for using `secrets`
to manage a basic level of security.

生成长度为八个字符的字母数字密码：

```python

import string
import secrets
alphabet = string.ascii_letters + string.digits
password = ''.join(secrets.choice(alphabet) for i in range(8))
```

> **Note**
>
> Applications should not
> `store passwords in a recoverable format`,
> whether plain text or encrypted.  They should be salted and hashed
> using a cryptographically strong one-way (irreversible) hash function.
>

Generate a ten-character alphanumeric password with at least one
lowercase character, at least one uppercase character, and at least
three digits:

```python

import string
import secrets
alphabet = string.ascii_letters + string.digits
while True:
    password = ''.join(secrets.choice(alphabet) for i in range(10))
    if (any(c.islower() for c in password)
            and any(c.isupper() for c in password)
            and sum(c.isdigit() for c in password) >= 3):
        break
```

生成 `XKCD 风格的密码串 <https://xkcd.com/936/>`_：

```python

import secrets
# On standard Linux systems, use a convenient dictionary file.
# Other platforms may need to provide their own word-list.
with open('/usr/share/dict/words') as f:
    words = [word.strip() for word in f]
    password = ' '.join(secrets.choice(words) for i in range(4))
```

Generate a hard-to-guess temporary URL containing a security token
suitable for password recovery applications:

```python

import secrets
url = 'https://example.com/reset=' + secrets.token_urlsafe()
```

..
   # This modeline must appear within the last ten lines of the file.
   kate: indent-width 3; remove-trailing-space on; replace-tabs on; encoding utf-8;
