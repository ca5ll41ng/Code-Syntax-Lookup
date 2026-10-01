---
id: "en-php-function-compersisthelper-construct"
language: "php"
lang: "en"
category: "function"
name: "COMPersistHelper::__construct"
title: "Construct a COMPersistHelper object"
signature: "public COMPersistHelper::__construct(variant|null $variant = null)"
module: "com"
source_url: "https://www.php.net/manual/en/compersisthelper.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a COMPersistHelper object

## Description

```php
public COMPersistHelper::__construct(variant|null $variant = null)
```

Constructs a persistence helper object, usually associated with a `$variant`.

## Parameters

- **`$variant`** — A COM object which implements IDispatch. To be able to successfully call any of `COMPersistHelper`'s methods, the object has to implement IPersistFile, IPersistStream and/or IPersistStreamInit. — Passing `null` as `$variant` is only useful if the object is to be loaded from a stream by calling `COMPersistHelper::LoadFromStream()`.

 Return values commented out, as constructors generally don't return a value. Uncomment this if you do need a return values section (for example, because there's also a procedural version of the method). <refsect1 role="returnvalues"> <title>Return Values</title> <para> </para> </refsect1>
