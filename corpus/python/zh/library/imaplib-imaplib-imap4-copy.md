---
id: "python-zh-function-imaplib-imap4-copy"
language: "python"
lang: "zh"
category: "function"
name: "IMAP4.copy"
signature: "IMAP4.copy(message_set, new_mailbox, *, uid=False)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/zh-cn/3/library/imaplib.html#imaplib.IMAP4.copy"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.copy

将 *message_set* 消息拷贝到 *new_mailbox* 的末尾。

If *uid* is true, *message_set* is a set of UIDs and the `UID COPY`
command is used instead of `COPY`.

> *Changed in next*: Added the *uid* parameter.
