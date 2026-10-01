---
id: "zh-php-function-function-openssl-dh-compute-key"
language: "php"
lang: "zh"
category: "function"
name: "openssl_dh_compute_key"
title: "计算远程 DH 公钥和本地 DH 密钥的共享密钥"
signature: "string|false openssl_dh_compute_key(string $public_key, OpenSSLAsymmetricKey $private_key)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-dh-compute-key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算远程 DH 公钥和本地 DH 密钥的共享密钥

## 说明

```php
string|false openssl_dh_compute_key(string $public_key, OpenSSLAsymmetricKey $private_key)
```

`openssl_dh_compute_key()` 返回的共享密钥通常用作与远端秘密通信的加密密钥。这称为 Diffie-Hellman 密钥交换。

> 必须确保远程与本地密钥对使用相同的 DH（Diffie-Hellman）参数，否则双方生成的共享密钥将无法匹配。

> ECDH 仅从 PHP 8.1.0 *和* OpenSSL 3.0.0 开始受支持。

## 参数

- **`$public_key`** — 远端的 DH 公钥。
- **`$private_key`** — 本地 DH 私钥，对应于要与远端共享的公钥。

## 返回值

成功时返回共享密钥， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$private_key` 现在接受 `OpenSSLAsymmetricKey`；之前接受类型 `OpenSSL key` 的 `resource`。 |

## 示例

**计算共享秘密**

首先在本地生成公私 DH 密钥对，让远端也这样做。需要使用 `openssl` 命令行实用程序。

```shell


# generate private/public key keypair
openssl dhparam -out dhparam.pem 2048
openssl genpkey -paramfile dhparam.pem -out privatekey.pem

# extract public key only
openssl pkey -in privatekey.pem -pubout -out publickey.pem 

    
```

接下来，将公钥发送给远端。使用 `openssl pkey` 命令查看从远端发送的公钥。

```shell


openssl pkey -pubin -in remotepublickey.pem -text -noout

    
```

以上示例的输出类似于：

```text


PKCS#3 DH Public-Key: (2048 bit)
    public-key:
        67:e5:e5:fa:e0:7b:0f:96:2c:dc:96:44:5f:50:02:
        9e:8d:c2:6c:04:68:b0:d1:1d:75:66:fc:63:f5:e3:
        42:30:b8:96:c1:45:cc:08:60:b4:21:3b:dd:ee:66:
        88:db:77:d9:1e:11:89:d4:5c:f2:7a:f2:f1:fe:1c:
        77:9d:6f:13:b8:b2:56:00:ef:cb:3b:60:79:74:02:
        98:f5:f9:8e:3e:b5:62:08:de:ca:8c:c3:40:4a:80:
        79:d5:43:06:17:a8:19:56:af:cc:95:5e:e2:32:2d:
        d2:14:7b:76:5a:9a:f1:3c:76:76:35:cc:7b:c1:a5:
        f4:39:e5:b6:ca:71:3f:7c:3f:97:e5:ab:86:c1:cd:
        0e:e6:ee:04:c9:e6:2d:80:7e:59:c0:49:eb:b6:64:
        4f:a8:f9:bb:a3:87:b3:3d:76:01:9e:2b:16:94:a4:
        37:30:fb:35:e2:63:be:23:90:b9:ef:3f:46:46:04:
        94:8f:60:79:7a:51:55:d6:1a:1d:f5:d9:7f:4a:3e:
        aa:ac:b0:d0:82:cc:c2:e0:94:e0:54:c1:17:83:0b:
        74:08:4d:5a:79:ae:ff:7f:1c:04:ab:23:39:4a:ae:
        87:83:55:43:ab:7a:7c:04:9d:20:80:bb:af:5f:16:
        a3:e3:20:b9:21:47:8c:f8:7f:a8:60:80:9e:61:77:
        36
 [...abbreviated...]

    
```

使用此公钥作为 `openssl_dh_compute_key()` 的参数以计算共享密钥。

```php


<?php
$remote_public_key = '67e5e5fae07b0f962cdc96445f50029e8dc26c0468b0d11d7566fc63f5e34230b896c145cc0860b4213bddee6688db77d91e1189d45cf27af2f1fe1c779d6f13b8b25600efcb3b6079740298f5f98e3eb56208deca8cc3404a8079d5430617a81956afcc955ee2322dd2147b765a9af13c767635cc7bc1a5f439e5b6ca713f7c3f97e5ab86c1cd0ee6ee04c9e62d807e59c049ebb6644fa8f9bba387b33d76019e2b1694a43730fb35e263be2390b9ef3f464604948f60797a5155d61a1df5d97f4a3eaaacb0d082ccc2e094e054c117830b74084d5a79aeff7f1c04ab23394aae87835543ab7a7c049d2080bbaf5f16a3e320b921478cf87fa860809e617736';

$local_priv_key = openssl_pkey_get_private('file://privatekey.pem');

$shared_secret = openssl_dh_compute_key(hex2bin($remote_public_key), $local_priv_key);
echo bin2hex($shared_secret)."\n";
?>

     
```

**在 php 中生成 DH 公/私钥对**

首先，生成 DH 质数

```shell


openssl dhparam -out dhparam.pem 2048
openssl dh -in dhparam.pem -noout  -text

    
```

以上示例的输出类似于：

```text


    PKCS#3 DH Parameters: (2048 bit)
        prime:
            00:a3:25:1e:73:3f:44:b9:2b:ee:f4:9d:9f:37:6a:
            4b:fd:1d:bd:f4:af:da:c8:10:77:59:41:c6:5f:73:
            d2:88:29:39:cd:1c:5f:c3:9f:0f:22:d2:9c:20:c1:
            e4:c0:18:03:b8:b6:d8:da:ad:3b:39:a6:da:8e:fe:
            12:30:e9:03:5d:22:ba:ef:18:d2:7b:69:f9:5b:cb:
            78:c6:0c:8c:6b:f2:49:92:c2:49:e0:45:77:72:b3:
            55:36:30:f2:40:17:89:18:50:03:fa:2d:54:7a:7f:
            34:4c:73:32:b6:88:14:51:14:be:80:57:95:e6:a3:
            f6:51:ff:17:47:4f:15:d6:0e:6c:47:53:72:2c:2a:
            4c:21:cb:7d:f3:49:97:c9:47:5e:40:33:7b:99:52:
            7e:7a:f3:52:27:80:de:1b:26:6b:40:bb:14:11:0b:
            fb:e6:d8:2f:cf:a0:06:2f:96:b9:1c:0b:b4:cb:d3:
            a6:62:9c:48:67:f6:81:f2:c6:ff:45:03:0a:9d:67:
            9d:ce:27:d9:6b:48:5d:ca:fb:c2:5d:84:9b:8b:cb:
            40:c7:a4:0c:8a:6e:f4:ab:ba:b6:10:c3:b8:25:4d:
            cf:60:96:f4:db:e8:00:1c:58:47:7a:fb:51:86:d1:
            22:d7:4e:94:31:7a:d5:da:3d:53:de:da:bb:64:8d:
            62:6b
        generator: 2 (0x2)

    
```

质数和生成器值作为 p 和 g 传递给 `openssl_pkey_new()`

```php


<?php
$configargs = array();
$configargs['p'] = hex2bin('00a3251e733f44b92beef49d9f376a4bfd1dbdf4afdac810775941c65f73d2882939cd1c5fc39f0f22d29c20c1e4c01803b8b6d8daad3b39a6da8efe1230e9035d22baef18d27b69f95bcb78c60c8c6bf24992c249e0457772b3553630f2401789185003fa2d547a7f344c7332b688145114be805795e6a3f651ff17474f15d60e6c4753722c2a4c21cb7df34997c9475e40337b99527e7af3522780de1b266b40bb14110bfbe6d82fcfa0062f96b91c0bb4cbd3a6629c4867f681f2c6ff45030a9d679dce27d96b485dcafbc25d849b8bcb40c7a40c8a6ef4abbab610c3b8254dcf6096f4dbe8001c58477afb5186d122d74e94317ad5da3d53dedabb648d626b');
$configargs['g'] = hex2bin('02');
$private_key = openssl_pkey_new(array('dh' => $configargs));
openssl_pkey_export_to_file($private_key,'privatekey.pem',$passphrase='y0urp@s5phr@se');

$details = openssl_pkey_get_details($private_key);
$local_pub_key = $details['dh']['pub_key'];
echo bin2hex($local_pub_key)."\n";//you can send your public key to the remote party

$details = openssl_pkey_get_details(openssl_pkey_get_public("file://remotepublickey.pem"));
$remote_public_key = $details['dh']['pub_key'];
$shared_secret = openssl_dh_compute_key($remote_public_key, $private_key);
echo bin2hex($shared_secret)."\n";
?>

    
```

## 参见

`openssl_pkey_new()` `openssl_pkey_get_details()` `openssl_pkey_get_private()` `openssl_pkey_get_public()`
