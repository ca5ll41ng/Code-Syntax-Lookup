---
id: "zh-php-guide-class-yaf-loader"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-loader"
title: "Yaf_Loader 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-loader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Loader 类

Yaf_Loader

   简介  `Yaf_Loader` 为 Yaf 提供了自动加载功能的全面解决方案。    在第一次检索 `Yaf_Application` 实例时，`Yaf_Loader` 将实例化一个单例，并使用 spl_autoload 注册自己。通过 `Yaf_Loader::getInstance()` 检索实例    `Yaf_Loader` 加载类时仅仅尝试一次，如果失败了，取决于 yaf.use_spl_auload，如果配置是 On，`Yaf_Loader::autoload()` 将会返回 `false`，从而给其它自动加载提供机会。如果为 Off（默认），`Yaf_Loader::autoload()` 将会返回 `true`，更重要的是将会抛出非常有用的警告（对于找出类无法加载的原因非常有用）。 
> 请保持 yaf.use_spl_autoload 为 Off，除非有一些 library 有自己的自动加载机制，并且是无法重写的。

    默认情况下，`Yaf_Loader` 假设所有 library（类定义的脚本）储存进在 php.ini（yaf.library）定义的全局库目录中。    如果使用 `Yaf_Loader` 在本地库目录（在 application.ini 中定义，默认是 application.directory . "/library"）搜索一些类（库），需要使用 `Yaf_Loader::registerLocalNameSpace()` 注册本地类前缀    看看一些示例（假设 APPLICATION_PATH 是 application.directory）： 
**Config example**

```shell

// Assuming the following configure in php.ini:
yaf.library = "/global_dir"

//Assuming the following configure in application.ini
application.library = APPLICATION_PATH "/library"

     
```

 假设以下本地名称空间已注册： 
**注册本地命名空间**

```php

<?php
class Bootstrap extends Yaf_Bootstrap_Abstract{
     public function _initLoader($dispatcher) {
          Yaf_Loader::getInstance()->registerLocalNameSpace(array("Foo", "Bar"));
     }
}
?>

     
```

 自动加载示例： 
**加载类示例**

```shell

class Foo_Bar_Test =>
  // APPLICATION_PATH/library/Foo/Bar/Test.php
  
class GLO_Name  =>
  // /global_dir/Glo/Name.php
 
class BarNon_Test
  // /global_dir/Barnon/Test.php

      
```

 
**加载命名空间类示例**

```shell

class \Foo\Bar\Dummy =>
   // APPLICATION_PATH/library/Foo/Bar/Dummy.php

class \FooBar\Bar\Dummy =>
   // /global_dir/FooBar/Bar/Dummy.php

    
```

    可能会注意到所有文件夹名字的首字母是大写的，可以通过在 php.ini 中设置 yaf.lowcase_path = On 来将它们设为小写。    `Yaf_Loader` 也是设计来加载 MVC 类，响应的规则如下： 
**MVC 类加载示例**

```shell

Controller Classes =>
// APPLICATION_PATH/controllers/

Model Classes =>
// APPLICATION_PATH/models/

Plugin Classes =>
// APPLICATION_PATH/plugins/

    
```

 Yaf 通过识别类的后缀（这个是默认的，也可以通过改变配置项 yaf.name_suffix 来更改为前缀）来决定它是否是 MVC 类： 
**MVC 类区别**

```shell

Controller Classes =>
    // ***Controller

Model Classes =>
    // ***Model

Plugin Classes =>
    // ***Plugin

   
```

 一些示例： 
**MVC 加载示例**

```shell

class IndexController
    // APPLICATION_PATH/controllers/Index.php

class DataModel =>
   // APPLICATION_PATH/models/Data.php

class DummyPlugin =>
  // APPLICATION_PATH/plugins/Dummy.php

class A_B_TestModel =>
  // APPLICATION_PATH/models/A/B/Test.php

    
```

 
> 自 2.1.18 起，Yaf 支持用户脚本端的 Controller 自动加载（这意味着由用户 php 脚本触发自动加载，例如：访问 Bootstrap 或 Plugins 中的控制器静态属性），但自动加载器仅尝试在控制器类脚本下定位默认模块文件夹，即“APPLICATION_PATH/controllers/”。

 此外，该目录将受 yaf.lowcase_path 的影响。      类摘要   `Yaf_Loader`    `Yaf_Loader`    属性  `protected` `_local_ns`   `protected` `_library`   `protected` `_global_library`   `static` `_instance`  方法        属性 
- **`_local_ns`**
- **`_library`** — 默认情况下，此值为 application.directory . "/library"，可以通过修改 application.ini（application.library）或者调用 `Yaf_Loader::setLibraryPath()` 更改。
- **`_global_library`**
- **`_instance`**
