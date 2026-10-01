---
id: "en-php-function-imagick-setprogressmonitor"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setProgressMonitor"
title: "Set a callback to be called during processing"
signature: "public bool Imagick::setProgressMonitor(callable $callback)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setprogressmonitor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a callback to be called during processing

## Description

```php
public bool Imagick::setProgressMonitor(callable $callback)
```

Set a callback that will be called during the processing of the Imagick image.

## Parameters

- **`$callback`** — The progress function to call. It should return true if image processing should continue, or false if it should be cancelled. The offset parameter indicates the progress and the span parameter indicates the total amount of work needed to be done.
  ```php
  bool {callback}(mixed $offset, mixed $span)
  ```


  > The values passed to the callback function are not consistent. In particular the span parameter can increase during image processing. Because of this calculating the percentage complete of an image operation is not trivial.



## Return Values

Returns `true` on success.

## Examples

**`Imagick::setProgressMonitor()`**

```php

      
<?php
        $abortReason = null;
        
        try {
            $imagick = new \Imagick(realpath($this->control->getImagePath()));
            $startTime = time();

            $callback = function ($offset, $span)  use ($startTime, &$abortReason) {
                if (((100 * $offset) / $span)  > 20) {
                    $abortReason = "Processing reached 20%";
                    return false;
                }

                $nowTime = time();

                if ($nowTime - $startTime > 5) {
                    $abortReason = "Image processing took more than 5 seconds";
                    return false;
                }
                if (($offset % 5) == 0) {
                    echo "Progress: $offset / $span <br/>";
                }
                return true;
            };

            $imagick->setProgressMonitor($callback);

            $imagick->waveImage(2, 15);

            echo "Data len is: ".strlen($imagick->getImageBlob());
        }
        catch(\ImagickException $e) {
            if ($abortReason != null) {
                echo "Image processing was aborted: ".$abortReason."<br/>";
            }
            else {
                echo "ImagickException caught: ".$e->getMessage()." Exception type is ".get_class($e);
            }
        }

?>

      
```
