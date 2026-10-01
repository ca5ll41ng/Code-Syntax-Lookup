---
id: "zh-php-security-security-filesystem"
language: "php"
lang: "zh"
category: "security"
name: "security.filesystem"
title: "文件系统安全"
module: "security"
source_url: "https://www.php.net/manual/zh/security.filesystem.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 文件系统安全

PHP 受大多数服务器系统中文件和目录权限的内置安全机制的影响。 这允许控制文件系统中哪些文件是可读的。应该小心对待任何全局可读的文件， 要确保所有有权限访问该文件系统的用户都可以安全的读取文件。

PHP 被设计为以用户级别访问文件系统， 因此完全可以编写 PHP 脚本来读取系统文件，例如 `/etc/passwd`、 修改网络连接、发送大量打印任务等。这有一些明显的影响，因此需要确保读写的是合适的文件。

请看下面的脚本，用户表示想要删除自己主目录下的一个文件。 假设 PHP web 界面通常用于文件管理， 因此 Apache 用户允许删除用户主目录中的文件。

**不对变量检查会导致....**

```php


<?php

// 从用户主目录移除一个文件
$username = $_POST['user_submitted_name'];
$userfile = $_POST['user_submitted_filename'];
$homedir  = "/home/$username";

unlink("$homedir/$userfile");

echo "The file has been deleted!";

?>

     
```

由于 username 和 filename 由用户表单中提交，那就能提交属于其他人的 username 和 filename，甚至可以删除不被允许的文件。这种情况下， 应该使用一些其它形式的身份验证。不妨考虑一下，如果提交的变量是 `“../etc/”` 和 `“passwd”` 会发生什么。上面代码将等同于：

**... 文件系统攻击**

```php


<?php

// 删除磁盘中任何 PHP 有访问权限的文件。如果 PHP 有 root 权限：
$username = $_POST['user_submitted_name']; // "../etc"
$userfile = $_POST['user_submitted_filename']; // "passwd"
$homedir  = "/home/$username"; // "/home/../etc"

unlink("$homedir/$userfile"); // "/home/../etc/passwd"

echo "The file has been deleted!";

?>

     
```

有两个重要措施来防止此类问题。

- PHP web 用户二进制文件仅允许有限的权限。
- 检查所有提交上来的变量。

这是改进的脚本：

**更安全的文件名检查**

```php


<?php

// 删除磁盘中 PHP 有权访问的文件。
$username = $_SERVER['REMOTE_USER']; // 使用认证机制
$userfile = basename($_POST['user_submitted_filename']);
$homedir  = "/home/$username";

$filepath = "$homedir/$userfile";

if (file_exists($filepath) && unlink($filepath)) {
    $logstring = "Deleted $filepath\n";
} else {
    $logstring = "Failed to delete $filepath\n";
}

$fp = fopen("/home/logging/filedelete.log", "a");
fwrite($fp, $logstring);
fclose($fp);

echo htmlentities($logstring, ENT_QUOTES);

?>

     
```

然而，这样做也是有缺陷的。如果认证系统允许用户创建自己的登录用户名， 而用户选择 `“../etc/”` 作为登录名，系统将再次暴露。 出于这个原因，需要编写自定义检查：

**更安全的文件名检查**

```php


<?php

$username     = $_SERVER['REMOTE_USER']; // 使用认证机制
$userfile     = $_POST['user_submitted_filename'];
$homedir      = "/home/$username";

$filepath     = "$homedir/$userfile";

if (!ctype_alnum($username) || !preg_match('/^(?:[a-z0-9_-]|\.(?!\.))+$/iD', $userfile)) {
    die("Bad username/filename");
}

//等等...

?>

     
```

根据操作系统的不同，需要关心各种各样的文件，比如设备条目（`/dev/` 或 `COM1`）、配置文件（`/etc/` 文件和 `.ini` 文件）、 众所周知的文件存储区域（`/home/`，`My Documents`）等等。出于这个原因， 创建一个禁止所有权限而只开放明确允许的策略通常更容易些。

## 空字符（Null bytes）相关问题

由于 PHP 使用底层 C 函数进行文件系统相关操作，因此它可能会以完全意想不到的方式处理空字符。 在 C 语言中空字符标识字符串的结束，所以一个完整的字符串是从其开头到遇见空字符为止。 下面的示例展示了易受攻击的代码，演示了这个问题：

**会被空字符攻击的代码**

```php


<?php

$file = $_GET['file']; // "../../etc/passwd\0"
if (file_exists('/home/wwwrun/' . $file . '.php')) {
    // 当 /home/wwwrun/../../etc/passwd 文件存在的时候 file_exists 将会返回 true
    include '/home/wwwrun/' . $file . '.php';

    // 将会加载 /etc/passwd 文件
}

?>

     
```

因此，在文件系统操作中都应该正确检查任何被污染的字符串。这是上个示例的改进版本：

**验证输入的正确性**

```php


<?php

$file = $_GET['file']; 

// 对值进行白名单检查
switch ($file) {
    case 'main':
    case 'foo':
    case 'bar':
        include '/home/wwwrun/include/' . $file . '.php';
        break;
    default:
        include '/home/wwwrun/include/main.php';
}

?>

     
```
