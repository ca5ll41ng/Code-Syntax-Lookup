---
id: "zh-php-function-function-fann-read-train-from-file"
language: "php"
lang: "zh"
category: "function"
name: "fann_read_train_from_file"
title: "读取存储训练数据的文件。"
signature: "resource fann_read_train_from_file(string $filename)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-read-train-from-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取存储训练数据的文件。

## 说明

```php
resource fann_read_train_from_file(string $filename)
```

读取存储训练数据的文件。

## 参数

- **`$filename`** — 输入文件的格式如下:
  ```txt


  num_train_data num_input num_output
  inputdata separated by space
  outputdata separated by space

  .
  .
  .

  inputdata separated by space
  outputdata separated by space

       
  ```



## 返回值

成功时返回训练数据 `资源`，发生错误返回 `false`。

## 示例

**`fann_read_train_from_file()` 函数的使用范例：**

```php


<?php
$train_data = fann_read_train_from_file("xor.data");
if ($train_data) {
    // Do something with $train_data for XOR function
}
?>

    
```

xor.data 文件的内容：

```txt


4 2 1
-1 -1
-1
-1 1
1
1 -1
1
1 1
-1

    
```

## 参见

`fann_train_on_data()` `fann_destroy_train()` `fann_save_train()`
