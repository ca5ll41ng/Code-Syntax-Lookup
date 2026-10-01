---
id: "en-php-guide-simplexml-examples"
language: "php"
lang: "en"
category: "guide"
name: "simplexml.examples"
title: "Examples"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexml.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

## Basic SimpleXML usage

Many examples in this reference require an XML string. Instead of repeating this string in every example, we put it into a file which we include in each example. This included file is shown in the following example section. Alternatively, you could create an XML document and read it with `simplexml_load_file()`.

**Include file examples/simplexml-data.php with XML string**

```php


<?php
$xmlstr = <<<XML
<?xml version='1.0' standalone='yes'?>
<movies>
 <movie>
  <title>PHP: Behind the Parser</title>
  <characters>
   <character>
    <name>Ms. Coder</name>
    <actor>Onlivia Actora</actor>
   </character>
   <character>
    <name>Mr. Coder</name>
    <actor>El Act&#211;r</actor>
   </character>
  </characters>
  <plot>
   So, this language. It's like, a programming language. Or is it a
   scripting language? All is revealed in this thrilling horror spoof
   of a documentary.
  </plot>
  <great-lines>
   <line>PHP solves all my web problems</line>
  </great-lines>
  <rating type="thumbs">7</rating>
  <rating type="stars">5</rating>
 </movie>
</movies>
XML;
?>

    
```

The simplicity of SimpleXML appears most clearly when one extracts a string or number from a basic XML document.

**Getting `<plot>`**

```php


<?php
include 'examples/simplexml-data.php';

$movies = new SimpleXMLElement($xmlstr);

echo $movies->movie[0]->plot;
?>

    
```

The above example will output:

```text



   So, this language. It's like, a programming language. Or is it a
   scripting language? All is revealed in this thrilling horror spoof
   of a documentary.


    
```

Accessing elements within an XML document that contain characters not permitted under PHP's naming convention (e.g. the hyphen) can be accomplished by encapsulating the element name within braces and the apostrophe.

**Getting `<line>`**

```php


<?php
include 'examples/simplexml-data.php';

$movies = new SimpleXMLElement($xmlstr);

echo $movies->movie->{'great-lines'}->line;
?>

    
```

The above example will output:

```text


PHP solves all my web problems

    
```

**Accessing non-unique elements in SimpleXML**

When multiple instances of an element exist as children of a single parent element, normal iteration techniques apply.

```php


<?php
include 'examples/simplexml-data.php';

$movies = new SimpleXMLElement($xmlstr);

/* For each <character> node, we echo a separate <name>. */
foreach ($movies->movie->characters->character as $character) {
   echo $character->name, ' played by ', $character->actor, PHP_EOL;
}

?>

    
```

The above example will output:

```text


Ms. Coder played by Onlivia Actora
Mr. Coder played by El ActÓr

    
```

> Properties (`$movies->movie` in previous example) are not arrays. They are iterable and accessible objects.

**Using attributes**

So far, we have only covered the work of reading element names and their values. SimpleXML can also access element attributes. Access attributes of an element just as you would elements of an `array`.

```php


<?php
include 'examples/simplexml-data.php';

$movies = new SimpleXMLElement($xmlstr);

/* Access the <rating> nodes of the first movie.
 * Output the rating scale, too. */
foreach ($movies->movie[0]->rating as $rating) {
    switch((string) $rating['type']) { // Get attributes as element indices
    case 'thumbs':
        echo $rating, ' thumbs up';
        break;
    case 'stars':
        echo $rating, ' stars';
        break;
    }
}
?>

    
```

The above example will output:

```text


7 thumbs up5 stars

    
```

**Comparing Elements and Attributes with Text**

To compare an element or attribute with a string or pass it into a function that requires a string, you must cast it to a string using `(string)`. Otherwise, PHP treats the element as an object.

```php


<?php
include 'examples/simplexml-data.php';

$movies = new SimpleXMLElement($xmlstr);

if ((string) $movies->movie->title == 'PHP: Behind the Parser') {
    print 'My favorite movie.';
}

echo htmlentities((string) $movies->movie->title);
?>

    
```

The above example will output:

```text


My favorite movie.PHP: Behind the Parser

    
```

**Comparing Two Elements**

Two SimpleXMLElements are considered different even if they point to the same element.

```php


<?php
include 'examples/simplexml-data.php';

$movies1 = new SimpleXMLElement($xmlstr);
$movies2 = new SimpleXMLElement($xmlstr);
var_dump($movies1 == $movies2);
?>

    
```

The above example will output:

```text


bool(false)

    
```

**Using XPath**

SimpleXML includes built-in XPath support. To find all `<character>` elements.

'`//`' serves as a wildcard. To specify absolute paths, omit one of the slashes:

```php


<?php
include 'examples/simplexml-data.php';

$movies = new SimpleXMLElement($xmlstr);

foreach ($movies->xpath('//character') as $character) {
    echo $character->name, ' played by ', $character->actor, PHP_EOL;
}
?>

    
```

The above example will output:

```text


Ms. Coder played by Onlivia Actora
Mr. Coder played by El ActÓr

    
```

**Setting values**

Data in SimpleXML doesn't have to be constant. The object allows for manipulation of all of its elements.

```php


<?php
include 'examples/simplexml-data.php';
$movies = new SimpleXMLElement($xmlstr);

$movies->movie[0]->characters->character[0]->name = 'Miss Coder';

echo $movies->asXML();
?>

    
```

The above example will output:

```text


<?xml version="1.0" standalone="yes"?>
<movies>
 <movie>
  <title>PHP: Behind the Parser</title>
  <characters>
   <character>
    <name>Miss Coder</name>
    <actor>Onlivia Actora</actor>
   </character>
   <character>
    <name>Mr. Coder</name>
    <actor>El Act&#xD3;r</actor>
   </character>
  </characters>
  <plot>
   So, this language. It's like, a programming language. Or is it a
   scripting language? All is revealed in this thrilling horror spoof
   of a documentary.
  </plot>
  <great-lines>
   <line>PHP solves all my web problems</line>
  </great-lines>
  <rating type="thumbs">7</rating>
  <rating type="stars">5</rating>
 </movie>
</movies>

    
```

**Adding elements and attributes**

SimpleXML has had the ability to easily add children and attributes.

```php


<?php
include 'examples/simplexml-data.php';
$movies = new SimpleXMLElement($xmlstr);

$character = $movies->movie[0]->characters->addChild('character');
$character->addChild('name', 'Mr. Parser');
$character->addChild('actor', 'John Doe');

$rating = $movies->movie[0]->addChild('rating', 'PG');
$rating->addAttribute('type', 'mpaa');

echo $movies->asXML();
?>

    
```

The above example will output:

```text


<?xml version="1.0" standalone="yes"?>
<movies>
 <movie>
  <title>PHP: Behind the Parser</title>
  <characters>
   <character>
    <name>Ms. Coder</name>
    <actor>Onlivia Actora</actor>
   </character>
   <character>
    <name>Mr. Coder</name>
    <actor>El Act&#xD3;r</actor>
   </character>
  <character><name>Mr. Parser</name><actor>John Doe</actor></character></characters>
  <plot>
   So, this language. It's like, a programming language. Or is it a
   scripting language? All is revealed in this thrilling horror spoof
   of a documentary.
  </plot>
  <great-lines>
   <line>PHP solves all my web problems</line>
  </great-lines>
  <rating type="thumbs">7</rating>
  <rating type="stars">5</rating>
 <rating type="mpaa">PG</rating></movie>
</movies>

    
```

**DOM Interoperability**

PHP has a mechanism to convert XML nodes between SimpleXML and DOM formats. This example shows how one might change a DOM element to SimpleXML.

```php


<?php
$dom = new DOMDocument;
$dom->loadXML('<books><book><title>blah</title></book></books>');
if (!$dom) {
    echo 'Error while parsing the document';
    exit;
}

$books = simplexml_import_dom($dom);

echo $books->book[0]->title;
?>

    
```

The above example will output:

```text


blah

    
```

**Working with namespaces**

```php


<?php
$data = <<<XML
<movies xmlns="http://default" xmlns:a="http://a">
 <movie xml:id="movie1" a:link="IMDB">
  <a:actor>Onlivia Actora</a:actor>
 </movie>
</movies>
XML;

$movies = simplexml_load_string($data);

// Namespace http://www.w3.org/XML/1998/namespace is available as "xml".
echo $movies->movie->attributes("xml", true)["id"] . "\n";

// Namespaced attributes can be accessed with attributes().
echo $movies->movie->attributes("a", true)["link"] . "\n";

// Using namespace URI allows document to use any namespace alias.
echo $movies->movie->attributes("http://a")["link"] . "\n";

// Children can be accessed with children().
echo $movies->movie->children("http://a")->actor . "\n";

// Using xpath() with namespace requires registering it first.
$movies->registerXPathNamespace("a", "http://a");
echo count($movies->xpath("//a:actor")) . "\n";

// Even the default namespace must be registered.
$movies->registerXPathNamespace("default", "http://default");
echo count($movies->xpath("//default:movie")) . "\n";

// This is empty.
echo count($movies->xpath("//movie")) . "\n";
?>

    
```

## Dealing with XML errors

Dealing with XML errors when loading documents is a very simple task. Using the libxml functionality it is possible to suppress all XML errors when loading the document and then iterate over the errors.

The `LibXMLError` object, returned by `libxml_get_errors()`, contains several properties including the message, line and column (position) of the error.

**Loading broken XML string**

```php


<?php
libxml_use_internal_errors(true);
$sxe = simplexml_load_string("<?xml version='1.0'><broken><xml></broken>");
if ($sxe === false) {
    echo "Failed loading XML\n";
    foreach(libxml_get_errors() as $error) {
        echo "\t", $error->message;
    }
}
?>

    
```

The above example will output:

```text


Failed loading XML
    Blank needed here
    parsing XML declaration: '?>' expected
    Opening and ending tag mismatch: xml line 1 and broken
    Premature end of data in tag broken line 1

    
```

## See Also

`libxml_use_internal_errors()` `libxml_get_errors()` `class.libxmlerror`
