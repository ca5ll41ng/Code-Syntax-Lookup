---
id: "en-php-guide-yaml-callbacks"
language: "php"
lang: "en"
category: "guide"
name: "yaml.callbacks"
title: "Callbacks"
module: "yaml"
source_url: "https://www.php.net/manual/en/yaml.callbacks.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Callbacks

## Parse callbacks

Parse `callable`s are invoked by `yaml_parse()`, `yaml_parse_file()` or `yaml_parse_url()` functions when a registered YAML tag is encountered. The callback is passed the tagged entity's value, the tag, and flags indicating the scalar entity style. The callback must return the data that the YAML parser should emit for this entity.

**Parse callback example**

```php


<?php
/**
 * Parsing callback for yaml tag.
 * @param mixed $value Data from yaml file
 * @param string $tag Tag that triggered callback
 * @param int $flags Scalar entity style (see YAML_*_SCALAR_STYLE)
 * @return mixed Value that YAML parser should emit for the given value
 */
function tag_callback ($value, $tag, $flags) {
  var_dump(func_get_args()); // debugging
  return "Hello {$value}";
}

$yaml = <<<YAML
greeting: !example/hello World
YAML;

$result = yaml_parse($yaml, 0, $ndocs, array(
    '!example/hello' => 'tag_callback',
  ));

var_dump($result);
?>

   
```

The above example will output something similar to:

```text


array(3) {
  [0]=>
  string(5) "World"
  [1]=>
  string(14) "!example/hello"
  [2]=>
  int(1)
}
array(1) {
  ["greeting"]=>
  string(11) "Hello World"
}

   
```

## Emit callbacks

Emit callbacks are invoked when an instance of a registered class is emitted by `yaml_emit()` or `yaml_emit_file()`. The callback is passed the object to be emitted. The callback must return an array having two keys: "`tag`" and "`data`". The value associated with the "`tag`" key must be a string to be used as the YAML tag in the output. The value associated with the "`data`" key will be encoded as YAML and emitted in place of the intercepted object.

**Emit callback example**

```php


<?php
class EmitExample {
  public $data;    // data may be in any pecl/yaml suitable type

  public function __construct ($d) {
    $this->data = $d;
  }

  /**
   * Yaml emit callback function, referred on yaml_emit call by class name.
   *
   * Expected to return an array with 2 values:
   *   - 'tag': custom tag for this serialization
   *   - 'data': value to convert to yaml (array, string, bool, number)
   *
   * @param object $obj Object to be emitted
   * @return array Tag and surrogate data to emit
   */
  public static function yamlEmit (EmitExample $obj) {
    return array(
      'tag' => '!example/emit',
      'data' => $obj->data,
    );
  }
}

$emit_callbacks = array(
  'EmitExample' => array('EmitExample', 'yamlEmit')
);

$t = new EmitExample(array('a','b','c'));
$yaml = yaml_emit(
  array(
    'example' => $t,
  ),
  YAML_ANY_ENCODING,
  YAML_ANY_BREAK,
  $emit_callbacks
);
var_dump($yaml);
?>

   
```

The above example will output something similar to:

```text


string(43) "---
example: !example/emit
- a
- b
- c
...
"

   
```
