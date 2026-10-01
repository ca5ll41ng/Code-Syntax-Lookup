---
id: "zh-php-guide-stream-examples"
language: "php"
lang: "zh"
category: "guide"
name: "stream.examples"
title: "示例"
module: "stream"
source_url: "https://www.php.net/manual/zh/stream.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

**使用 `file_get_contents()` 从多个来源检索数据**

```php


<?php
/* 从 /home/bar 读取本地文件 */
$localfile = file_get_contents("/home/bar/foo.txt");

/* 与上面相同，显式命名 FILE 方案 */
$localfile = file_get_contents("file:///home/bar/foo.txt");

/* 使用 HTTP 从 www.example.com 读取远程文件 */
$httpfile  = file_get_contents("http://www.example.com/foo.txt");

/* 使用 HTTPS 从 www.example.com 读取远程文件 */
$httpsfile = file_get_contents("https://www.example.com/foo.txt");

/* 使用 FTP 从 ftp.example.com 读取远程文件 */
$ftpfile   = file_get_contents("ftp://user:pass@ftp.example.com/foo.txt");

/* 使用 FTPS 从 ftp.example.com 读取远程文件 */
$ftpsfile  = file_get_contents("ftps://user:pass@ftp.example.com/foo.txt");
?>

   
```

**向 https 服务器发出 POST 请求**

```php


<?php
/* 发送 POST 请求到 https://secure.example.com/form_action.php
* 包含了名为 "foo" 和 "bar" 及其虚拟值的表单元素
*/

$sock = fsockopen("ssl://secure.example.com", 443, $errno, $errstr, 30);
if (!$sock) die("$errstr ($errno)\n");

$data = "foo=" . urlencode("Value for Foo") . "&bar=" . urlencode("Value for Bar");

fwrite($sock, "POST /form_action.php HTTP/1.0\r\n");
fwrite($sock, "Host: secure.example.com\r\n");
fwrite($sock, "Content-type: application/x-www-form-urlencoded\r\n");
fwrite($sock, "Content-length: " . strlen($data) . "\r\n");
fwrite($sock, "Accept: */*\r\n");
fwrite($sock, "\r\n");
fwrite($sock, $data);

$headers = "";
while ($str = trim(fgets($sock, 4096)))
$headers .= "$str\n";

echo "\n";

$body = "";
while (!feof($sock))
$body .= fgets($sock, 4096);

fclose($sock);
?>

   
```

**将数据写入压缩文件**

```php


<?php
/* 创建一个包含任意字符串的压缩文件
* 文件可以使用 compress.zlib 流读取，
* 也可以使用 “gzip -d foo-bar.txt.gz” 从命令行解压缩文件
*/
$fp = fopen("compress.zlib://foo-bar.txt.gz", "wb");
if (!$fp) die("Unable to create file.");

fwrite($fp, "This is a test.\n");

fclose($fp);
?>

   
```

## 示例类注册为流封装器

下面的示例实现了一个 var:// 协议处理程序，允许使用诸如 `fread()` 之类的标准文件系统流函数对有名称的全局变量进行读写访问。下面实现的 var:// 协议，指定的 URL “var://foo” 将从 $GLOBALS["foo"] 读写数据。

**用于读写全局变量的流**

```php


<?php

class VariableStream {
    var $position;
    var $varname;

    function stream_open($path, $mode, $options, &$opened_path)
    {
        $url = parse_url($path);
        $this->varname = $url["host"];
        $this->position = 0;

        return true;
    }

    function stream_read($count)
    {
        $ret = substr($GLOBALS[$this->varname], $this->position, $count);
        $this->position += strlen($ret);
        return $ret;
    }

    function stream_write($data)
    {
        $left = substr($GLOBALS[$this->varname], 0, $this->position);
        $right = substr($GLOBALS[$this->varname], $this->position + strlen($data));
        $GLOBALS[$this->varname] = $left . $data . $right;
        $this->position += strlen($data);
        return strlen($data);
    }

    function stream_tell()
    {
        return $this->position;
    }

    function stream_eof()
    {
        return $this->position >= strlen($GLOBALS[$this->varname]);
    }

    function stream_seek($offset, $whence)
    {
        switch ($whence) {
            case SEEK_SET:
                if ($offset < strlen($GLOBALS[$this->varname]) && $offset >= 0) {
                     $this->position = $offset;
                     return true;
                } else {
                     return false;
                }
                break;

            case SEEK_CUR:
                if ($offset >= 0) {
                     $this->position += $offset;
                     return true;
                } else {
                     return false;
                }
                break;

            case SEEK_END:
                if (strlen($GLOBALS[$this->varname]) + $offset >= 0) {
                     $this->position = strlen($GLOBALS[$this->varname]) + $offset;
                     return true;
                } else {
                     return false;
                }
                break;

            default:
                return false;
        }
    }

    function stream_metadata($path, $option, $var) 
    {
        if($option == STREAM_META_TOUCH) {
            $url = parse_url($path);
            $varname = $url["host"];
            if(!isset($GLOBALS[$varname])) {
                $GLOBALS[$varname] = '';
            }
            return true;
        }
        return false;
    }
}

stream_wrapper_register("var", "VariableStream")
    or die("Failed to register protocol");

$myvar = "";

$fp = fopen("var://myvar", "r+");

fwrite($fp, "line1\n");
fwrite($fp, "line2\n");
fwrite($fp, "line3\n");

rewind($fp);
while (!feof($fp)) {
    echo fgets($fp);
}
fclose($fp);
var_dump($myvar);

?>

    
```

以上示例会输出：

```text


line1
line2
line3
string(18) "line1
line2
line3
"

    
```
