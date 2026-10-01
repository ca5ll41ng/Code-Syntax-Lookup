---
id: "zh-php-function-function-mail"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["mail command_injection"],"cwe":["CWE-78"],"params":[5]}
name: "mail"
title: "发送邮件"
signature: "bool mail(string $to, string $subject, string $message, array|string $additional_headers = [], string $additional_params = \"\")"
module: "mail"
source_url: "https://www.php.net/manual/zh/function.mail.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 发送邮件

## 说明

```php
bool mail(string $to, string $subject, string $message, array|string $additional_headers = [], string $additional_params = "")
```

发送邮件。

## 参数

- **`$to`** — 电子邮件收件人，或收件人列表。 — 本字符串的格式必须符合 [RFC 2822](2822)。例如： user@example.com user@example.com, anotheruser@example.com User <user@example.com> User <user@example.com>, Another User <anotheruser@example.com>
- **`$subject`** — 电子邮件的主题。
  > 本项不能包含任何换行符，否则邮件可能无法正确发送。


- **`$message`** — 所要发送的消息。 — 行之间必须以一个 CRLF（\r\n）分隔。每行不能超过 70 个字符。
  > （Windows 下）当 PHP 直接连接到 SMTP 服务器时，如果在一行开头发现一个句号，则会被删掉。要避免此问题，将单个句号替换成两个句号。
  >
  > ```php
  >
  >
  > <?php
  > $text = str_replace("\n.", "\n..", $text);
  > ?>
  >
  >         
  > ```


- **`$additional_headers`（可选项）** — 要插入到邮件 header 尾部的 `String` 或 `array`。 — 这通常用于添加额外的 header（From、Cc 和 Bcc）。多个额外的 header 应使用 CRLF（\r\n）分隔。如果使用外部数据来组成此 header，则应对数据进行清理，避免注入不需要的 header。 — 如果传递 `array`，则 key 是 header 名称，value 对应的 header 值。
  > 发送邮件时，邮件*必须*包含 `From` header。这可以使用 `$additional_headers` 参数来设置，或者可以在 php.ini 中设置默认值。
  >
  > 如果不这样做，将导致类似于 `Warning: mail(): "sendmail_from" not set in php.ini or custom "From:" header missing` 的错误消息。当直接通过 SMTP（仅限 Windows）发送时，`From` header 还会设置 `Return-Path`。


  > 如果未收到消息，请尝试仅使用 LF（\n）。一些 Unix 邮件传输代理（最著名的是 [qmail]()）会自动用 CRLF 替换 LF（如果使用 CRLF，则会导致 CR 重复）。这应该是最后的手段，因为它不符合 [RFC 2822](2822)。


- **`$additional_params`（可选）** — 发送邮件时，`$additional_params` 参数可用于将额外的 flag 作为命令行选项传递给通过 `sendmail_path` 配置项指定的邮件发送程序。例如，当使用 sendmail 并配合 `-f` 选项时，可通过此参数设置邮件发件人地址。 — 该参数在内部会经过 `escapeshellcmd()` 转义，以防止命令注入执行。`escapeshellcmd()` 虽可阻止命令执行，但仍允许添加额外的参数。出于安全考虑，建议用户自行对该参数进行过滤和清理，避免向 shell 命令中注入非预期的参数。 — 由于会自动应用 `escapeshellcmd()`，某些符合互联网 RFC 标准、允许在电子邮件地址中使用的字符将无法通过此方式使用。`mail()` 无法支持这些字符，因此，若程序中必须使用此类字符，建议改用其他发送邮件的方式（例如使用框架或第三方库）。 — 应将运行 Web 服务器的用户添加到 sendmail 配置的受信任用户列表中，以避免通过此方法设置信封发件人（-f）时，邮件自动带上 “X-Warning” 头部。对于使用 sendmail 的用户，该文件路径为 `/etc/mail/trusted-users`。

## 返回值

如果邮件成功接受投递，返回 `true`，否则返回 `false`。

同样重要的是要注意到，邮件仅接受了投递并不意味着邮件实际上达到预定目的地。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 现在 `$additional_headers` 参数开始支持 `array`。 |

## 示例

**发送邮件**

使用 `mail()` 发送简单的邮件：

```php


<?php
// 消息
$message = "Line 1\r\nLine 2\r\nLine 3";

// 如果任何一行超过 70 个字符，应该使用 wordwrap()
$message = wordwrap($message, 70, "\r\n");

// 发送
mail('caffeinated@example.com', 'My Subject', $message);
?>

    
```

**使用额外标头发送邮件**

添加基本 header，告诉 MUA 发件人和回复地址：

```php


<?php
$to      = 'nobody@example.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>

    
```

**使用 `array` 形式的额外标头发送邮件**

此示例与上面示例发送邮件相同，但将附加 header 作为数组传递（自 PHP 7.2.0 起可用）。

```php


<?php
$to      = 'nobody@example.com';
$subject = 'the subject';
$message = 'hello';
$headers = array(
    'From' => 'webmaster@example.com',
    'Reply-To' => 'webmaster@example.com',
    'X-Mailer' => 'PHP/' . phpversion()
);

mail($to, $subject, $message, $headers);
?>

    
```

**使用附加命令行参数发送邮件。**

`$additional_params` 参数可用于在使用 `sendmail_path` 配置的程序发送邮件时，传递额外参数。

```php


<?php
mail('nobody@example.com', 'the subject', 'the message', null,
   '-fwebmaster@example.com');
?>

    
```

**发送 HTML 邮件**

也可以使用 `mail()` 发送 HTML 邮件。

```php


<?php
// 多个收件人
$to = 'johny@example.com, sally@example.com'; // note the comma

// 主题
$subject = 'Birthday Reminders for August';

// 消息
$message = '
<html>
<head>
  <title>Birthday Reminders for August</title>
</head>
<body>
  <p>Here are the birthdays upcoming in August!</p>
  <table>
    <tr>
      <th>Person</th><th>Day</th><th>Month</th><th>Year</th>
    </tr>
    <tr>
      <td>Johny</td><td>10th</td><td>August</td><td>1970</td>
    </tr>
    <tr>
      <td>Sally</td><td>17th</td><td>August</td><td>1973</td>
    </tr>
  </table>
</body>
</html>
';

// 发送 HTML 邮件，必须设置 Content-type header
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// 附加 header
$headers[] = 'To: Mary <mary@example.com>, Kelly <kelly@example.com>';
$headers[] = 'From: Birthday Reminder <birthday@example.com>';
$headers[] = 'Cc: birthdayarchive@example.com';
$headers[] = 'Bcc: birthdaycheck@example.com';

// 发送
mail($to, $subject, $message, implode("\r\n", $headers));
?>

    
```

> 若需发送 HTML 或其他复杂格式的邮件，建议使用 PEAR 包 [PEAR::Mail](Mail)。

## 注释

> `mail()` 的 SMTP 实现（仅限 Windows）在多个方面与 sendmail 实现不同。首先，它不使用本地二进制程序来构造邮件，而是直接通过套接字操作，这意味着需要在网络套接字上监听的邮件传输代理 `MTA`（可在本地主机或远程机器上）。
>
> 其次，`From:`、`Cc:`、`Bcc:` 和 `Date:` 等自定义 header *并非*由 `MTA` 解释，而是由 PHP 进行解析。
>
> 因此，`$to` 参数不应采用 "Something <someone@example.com>" 这类地址格式。在与 MTA 通信时，mail 命令可能无法正确解析此类格式。

> 值得注意的是，`mail()` 不适合在循环中发送大量邮件。发送每封邮件，此函数为打开和关闭一个套接字，效率不高。
>
> 要发送大量邮件，请参阅 [PEAR::Mail](Mail) 和 [PEAR::Mail_Queue](Mail_Queue) 包。

> 以下 RFC 可能有用： [RFC 1896](1896)、[RFC 2045](2045)、 [RFC 2046](2046)、[RFC 2047](2047)、 [RFC 2048](2048)、[RFC 2049](2049) 和 [RFC 2822](2822)。

## 参见

`mb_send_mail()` `imap_mail()` [PEAR::Mail](Mail) [PEAR::Mail_Mime](Mail_Mime)
