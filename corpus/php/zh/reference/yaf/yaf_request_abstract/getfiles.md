---
id: "zh-php-function-yaf-request-abstract-getfiles"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getFiles"
title: "获取上传文件"
signature: "public mixed Yaf_Request_Abstract::getFiles([string $name = ...], [mixed $default = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getfiles.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取上传文件

## 说明

```php
public mixed Yaf_Request_Abstract::getFiles([string $name = ...], [mixed $default = ...])
```

从 $_FILES 中获取变量。

## 参数

- **`$name`** — 变量名。如果省略，则返回整个数组。
- **`$default`** — 如果未找到变量则要返回的值。

## 返回值

返回上传文件数组，如果未设置则返回 `$default`。

## 示例

**`Yaf_Request_Abstract::getFiles()` 示例**

```php


<?php
class UploadController extends Yaf_Controller_Abstract
{
    public function saveAction()
    {
        $file = $this->getRequest()->getFiles("avatar");

        if (is_array($file) && $file["error"] === UPLOAD_ERR_OK) {
            move_uploaded_file(
                $file["tmp_name"],
                "/var/www/uploads/" . basename($file["name"])
            );
        }
    }
}
?>
   
```

**`Yaf_Request_Abstract::getFiles()` 示例**

```php


<?php
class UploadController extends Yaf_Controller_Abstract
{
    public function saveAction()
    {
        // 假设以表单字段名 "avatar" 上传了文件
        var_dump($this->getRequest()->getFiles("avatar"));
    }
}
?>
   
```

以上示例的输出类似于：

```text


array(5) {
  ["name"]=>
  string(9) "photo.jpg"
  ["type"]=>
  string(10) "image/jpeg"
  ["tmp_name"]=>
  string(14) "/tmp/phpXvBXqZ"
  ["error"]=>
  int(0)
  ["size"]=>
  int(12455)
}

   
```

## 参见

 `Yaf_Request_Abstract::getQuery()` `Yaf_Request_Abstract::getRequest()` `Yaf_Request_Abstract::getPost()` `Yaf_Request_Abstract::getCookie()` `Yaf_Request_Abstract::getFiles()` `Yaf_Request_Abstract::getParam()`
