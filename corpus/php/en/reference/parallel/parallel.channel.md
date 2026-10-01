---
id: "en-php-guide-class-parallel-channel"
language: "php"
lang: "en"
category: "guide"
name: "class.parallel-channel"
title: "The parallel\\Channel class"
module: "parallel"
source_url: "https://www.php.net/manual/en/class.parallel-channel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The parallel\Channel class

parallel\Channel

  Unbuffered Channels  An unbuffered channel will block on calls to `parallel\Channel::send()` until there is a receiver, and block on calls to `parallel\Channel::recv()` until there is a sender. This means an unbuffered channel is not only a way to share data among tasks but also a simple method of synchronization.    An unbuffered channel is the fastest way to share data among tasks, requiring the least copying.     Buffered Channels  A buffered channel will not block on calls to `parallel\Channel::send()` until capacity is reached, calls to `parallel\Channel::recv()` will block until there is data in the buffer.     Closures over Channels  A powerful feature of parallel channels is that they allow the exchange of closures between tasks (and runtimes).    When a closure is sent over a channel the closure is buffered, it doesn't change the buffering of the channel transmitting the closure, but it does effect the static scope inside the closure: The same closure sent to different runtimes, or the same runtime, will not share their static scope.    This means that whenever a closure is executed that was transmitted by a channel, static state will be as it was when the closure was buffered.     Anonymous Channels  The anonymous channel constructor allows the programmer to avoid assigning names to every channel: parallel will generate a unique name for anonymous channels.     Class Synopsis   `parallel\Channel`    `final` `parallel\Channel`    Anonymous Constructor  Access  Sharing  Closing  Constant for Infinitely Buffered  `const` `Infinite`
