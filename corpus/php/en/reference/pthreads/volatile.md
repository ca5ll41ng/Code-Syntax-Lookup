---
id: "en-php-guide-class-volatile"
language: "php"
lang: "en"
category: "guide"
name: "class.volatile"
title: "The Volatile class"
module: "pthreads"
source_url: "https://www.php.net/manual/en/class.volatile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Volatile class

Volatile

  Introduction  The `Volatile` class is new to pthreads v3. Its introduction is a consequence of the new immutability semantics of `Threaded` members of `Threaded` classes. The `Volatile` class enables for mutability of its `Threaded` members, and is also used to store PHP arrays in `Threaded` contexts.     Class Synopsis  `Volatile`   `Volatile`   `extends` `Threaded`   Collectable   Traversable        Examples 
**New immutability semantics of Threaded**

```php

<?php

class Task extends Threaded
{
    public function __construct()
    {
        $this->data = new Threaded();

        // attempt to overwrite a Threaded property of a Threaded class (invalid)
        $this->data = new stdClass();
    }
}

var_dump((new Task())->data);

    
```

The above example will output something similar to:

```text

RuntimeException: Threaded members previously set to Threaded objects are immutable, cannot overwrite data in %s:%d

    
```

 
**Volatile use-case**

```php

<?php

class Task extends Volatile
{
    public function __construct()
    {
        $this->data = new Threaded();

        // attempt to overwrite a Threaded property of a Volatile class (valid)
        $this->data = new stdClass();
    }
}

var_dump((new Task())->data);

    
```

The above example will output something similar to:

```text

object(stdClass)#3 (0) {
}

    
```
