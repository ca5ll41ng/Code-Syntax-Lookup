---
id: "en-php-guide-class-random-engine"
language: "php"
lang: "en"
category: "guide"
name: "class.random-engine"
title: "The Random\\Engine interface"
module: "random"
source_url: "https://www.php.net/manual/en/class.random-engine.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Random\Engine interface

Random\Engine

   Introduction  A `Random\Engine` provides a low-level source of randomness by returning random bytes that are consumed by high-level APIs to perform their operations. The `Random\Engine` interface allows swapping out the algorithm used to generate randomness, because each algorithm makes different tradeoffs to fit specific use-cases. Some algorithms are very fast, but generate lower-quality randomness, whereas other algorithms are slower, but generate better randomness, up to cryptographically secure randomness as provided by the `Random\Engine\Secure` engine.    PHP provides several `Random\Engine`s out of the box to accommodate different use-cases. The `Random\Engine\Secure` engine that is backed by a CSPRNG is the recommended safe default choice, unless the application requires either reproducible sequences or very high performance.         Random   Engine
