---
id: "python-zh-function-hashlib-hashlib"
language: "python"
lang: "zh"
category: "function"
name: "hashlib"
title: "Maximum digest size that the hash function can output."
directive: "module"
module: "hashlib"
source_url: "https://docs.python.org/zh-cn/3/library/hashlib.html#module-hashlib"
license: "PSF"
updated: "2026-10-01"
---

# Maximum digest size that the hash function can output.

哈希函数可输出的最大摘要长度。

**Examples**

Simple hashing
""""""""""""""

To calculate hash of some data, you should first construct a hash object by
calling the appropriate constructor function (`blake2b` or
`blake2s`), then update it with the data by calling `~hash.update` on the
object, and, finally, get the digest out of the object by calling
`~hash.digest` (or `~hash.hexdigest` for hex-encoded string).

    >>> from hashlib import blake2b
    >>> h = blake2b()
    >>> h.update(b'Hello world')
    >>> h.hexdigest()
    '6ff843ba685842aa82031d3f53c48b66326df7639a63d128974c5c14f31a0f33343a8c65551134ed1ae0f2b0dd2bb495dc81039e3eeb0aa1bb0388bbeac29183'

As a shortcut, you can pass the first chunk of data to update directly to the
constructor as the positional argument:

    >>> from hashlib import blake2b
    >>> blake2b(b'Hello world').hexdigest()
    '6ff843ba685842aa82031d3f53c48b66326df7639a63d128974c5c14f31a0f33343a8c65551134ed1ae0f2b0dd2bb495dc81039e3eeb0aa1bb0388bbeac29183'

You can call `hash.update` as many times as you need to iteratively
update the hash:

    >>> from hashlib import blake2b
    >>> items = [b'Hello', b' ', b'world']
    >>> h = blake2b()
    >>> for item in items:
    ...     h.update(item)
    ...
    >>> h.hexdigest()
    '6ff843ba685842aa82031d3f53c48b66326df7639a63d128974c5c14f31a0f33343a8c65551134ed1ae0f2b0dd2bb495dc81039e3eeb0aa1bb0388bbeac29183'

Using different digest sizes
""""""""""""""""""""""""""""

BLAKE2 has configurable size of digests up to 64 bytes for BLAKE2b and up to 32
bytes for BLAKE2s. For example, to replace SHA-1 with BLAKE2b without changing
the size of output, we can tell BLAKE2b to produce 20-byte digests:

    >>> from hashlib import blake2b
    >>> h = blake2b(digest_size=20)
    >>> h.update(b'Replacing SHA1 with the more secure function')
    >>> h.hexdigest()
    'd24f26cf8de66472d58d4e1b1774b4c9158b1f4c'
    >>> h.digest_size
    20
    >>> len(h.digest())
    20

Hash objects with different digest sizes have completely different outputs
(shorter hashes are *not* prefixes of longer hashes); BLAKE2b and BLAKE2s
produce different outputs even if the output length is the same:

    >>> from hashlib import blake2b, blake2s
    >>> blake2b(digest_size=10).hexdigest()
    '6fa1d8fcfd719046d762'
    >>> blake2b(digest_size=11).hexdigest()
    'eb6ec15daf9546254f0809'
    >>> blake2s(digest_size=10).hexdigest()
    '1bf21a98c78a1c376ae9'
    >>> blake2s(digest_size=11).hexdigest()
    '567004bf96e4a25773ebf4'

Keyed hashing
"""""""""""""

Keyed hashing can be used for authentication as a faster and simpler
replacement for `Hash-based message authentication code
<https://en.wikipedia.org/wiki/HMAC>`_ (HMAC).
BLAKE2 can be securely used in prefix-MAC mode thanks to the
indifferentiability property inherited from BLAKE.

This example shows how to get a (hex-encoded) 128-bit authentication code for
message `b'message data'` with key `b'pseudorandom key'`::

    >>> from hashlib import blake2b
    >>> h = blake2b(key=b'pseudorandom key', digest_size=16)
    >>> h.update(b'message data')
    >>> h.hexdigest()
    '3d363ff7401e02026f4a4687d4863ced'

As a practical example, a web application can symmetrically sign cookies sent
to users and later verify them to make sure they weren't tampered with::

    >>> from hashlib import blake2b
    >>> from hmac import compare_digest
    >>>
    >>> SECRET_KEY = b'pseudorandomly generated server secret key'
    >>> AUTH_SIZE = 16
    >>>
    >>> def sign(cookie):
    ...     h = blake2b(digest_size=AUTH_SIZE, key=SECRET_KEY)
    ...     h.update(cookie)
    ...     return h.hexdigest().encode('utf-8')
    >>>
    >>> def verify(cookie, sig):
    ...     good_sig = sign(cookie)
    ...     return compare_digest(good_sig, sig)
    >>>
    >>> cookie = b'user-alice'
    >>> sig = sign(cookie)
    >>> print("{0},{1}".format(cookie.decode('utf-8'), sig))
    user-alice,b'43b3c982cf697e0c5ab22172d1ca7421'
    >>> verify(cookie, sig)
    True
    >>> verify(b'user-bob', sig)
    False
    >>> verify(cookie, b'0102030405060708090a0b0c0d0e0f00')
    False

Even though there's a native keyed hashing mode, BLAKE2 can, of course, be used
in HMAC construction with `hmac` module::

    >>> import hmac, hashlib
    >>> m = hmac.new(b'secret key', digestmod=hashlib.blake2s)
    >>> m.update(b'message')
    >>> m.hexdigest()
    'e3c8102868d28b5ff85fc35dda07329970d1a01e273c37481326fe0c861c8142'

Randomized hashing
""""""""""""""""""

By setting *salt* parameter users can introduce randomization to the hash
function. Randomized hashing is useful for protecting against collision attacks
on the hash function used in digital signatures.

    Randomized hashing is designed for situations where one party, the message
    preparer, generates all or part of a message to be signed by a second
    party, the message signer. If the message preparer is able to find
    cryptographic hash function collisions (i.e., two messages producing the
    same hash value), then they might prepare meaningful versions of the message
    that would produce the same hash value and digital signature, but with
    different results (e.g., transferring $1,000,000 to an account, rather than
    $10). Cryptographic hash functions have been designed with collision
    resistance as a major goal, but the current concentration on attacking
    cryptographic hash functions may result in a given cryptographic hash
    function providing less collision resistance than expected. Randomized
    hashing offers the signer additional protection by reducing the likelihood
    that a preparer can generate two or more messages that ultimately yield the
    same hash value during the digital signature generation process --- even if
    it is practical to find collisions for the hash function. However, the use
    of randomized hashing may reduce the amount of security provided by a
    digital signature when all portions of the message are prepared
    by the signer.

    (`NIST SP-800-106 "Randomized Hashing for Digital Signatures"
    <https://csrc.nist.gov/pubs/sp/800/106/final>`_)

In BLAKE2 the salt is processed as a one-time input to the hash function during
initialization, rather than as an input to each compression function.

> **Warning**
>
> *Salted hashing* (or just hashing) with BLAKE2 or any other general-purpose
> cryptographic hash function, such as SHA-256, is not suitable for hashing
> passwords.  See [BLAKE2 FAQ](https://www.blake2.net/#qa) for more
> information.
>

..

    >>> import os
    >>> from hashlib import blake2b
    >>> msg = b'some message'
    >>> # Calculate the first hash with a random salt.
    >>> salt1 = os.urandom(blake2b.SALT_SIZE)
    >>> h1 = blake2b(salt=salt1)
    >>> h1.update(msg)
    >>> # Calculate the second hash with a different random salt.
    >>> salt2 = os.urandom(blake2b.SALT_SIZE)
    >>> h2 = blake2b(salt=salt2)
    >>> h2.update(msg)
    >>> # The digests are different.
    >>> h1.digest() != h2.digest()
    True

Personalization
"""""""""""""""

Sometimes it is useful to force hash function to produce different digests for
the same input for different purposes. Quoting the authors of the Skein hash
function:

    We recommend that all application designers seriously consider doing this;
    we have seen many protocols where a hash that is computed in one part of
    the protocol can be used in an entirely different part because two hash
    computations were done on similar or related data, and the attacker can
    force the application to make the hash inputs the same. Personalizing each
    hash function used in the protocol summarily stops this type of attack.

    (`The Skein Hash Function Family
    <https://www.schneier.com/wp-content/uploads/2016/02/skein.pdf>`_,
    p. 21)

BLAKE2 可通过向 *person* 参数传入字节串来进行个性化::

    >>> from hashlib import blake2b
    >>> FILES_HASH_PERSON = b'MyApp Files Hash'
    >>> BLOCK_HASH_PERSON = b'MyApp Block Hash'
    >>> h = blake2b(digest_size=32, person=FILES_HASH_PERSON)
    >>> h.update(b'the same content')
    >>> h.hexdigest()
    '20d9cd024d4fb086aae819a1432dd2466de12947831b75c5a30cf2676095d3b4'
    >>> h = blake2b(digest_size=32, person=BLOCK_HASH_PERSON)
    >>> h.update(b'the same content')
    >>> h.hexdigest()
    'cf68fb5761b9c44e7878bfb2c4c9aea52264a80b75005e65619778de59f383a3'

Personalization together with the keyed mode can also be used to derive different
keys from a single one.

    >>> from hashlib import blake2s
    >>> from base64 import b64decode, b64encode
    >>> orig_key = b64decode(b'Rm5EPJai72qcK3RGBpW3vPNfZy5OZothY+kHY6h21KM=')
    >>> enc_key = blake2s(key=orig_key, person=b'kEncrypt').digest()
    >>> mac_key = blake2s(key=orig_key, person=b'kMAC').digest()
    >>> print(b64encode(enc_key).decode('utf-8'))
    rbPb15S/Z9t+agffno5wuhB77VbRi6F9Iv2qIxU7WHw=
    >>> print(b64encode(mac_key).decode('utf-8'))
    G9GtHFE1YluXY1zWPlYk1e/nWfu0WSEb0KRcjhDeP/o=

Tree mode
"""""""""

以下是对包含两个叶子节点的最小树进行哈希的例子::

       10
      /  \
     00  01

This example uses 64-byte internal digests, and returns the 32-byte final
digest::

    >>> from hashlib import blake2b
    >>>
    >>> FANOUT = 2
    >>> DEPTH = 2
    >>> LEAF_SIZE = 4096
    >>> INNER_SIZE = 64
    >>>
    >>> buf = bytearray(6000)
    >>>
    >>> # Left leaf
    ... h00 = blake2b(buf[0:LEAF_SIZE], fanout=FANOUT, depth=DEPTH,
    ...               leaf_size=LEAF_SIZE, inner_size=INNER_SIZE,
    ...               node_offset=0, node_depth=0, last_node=False)
    >>> # Right leaf
    ... h01 = blake2b(buf[LEAF_SIZE:], fanout=FANOUT, depth=DEPTH,
    ...               leaf_size=LEAF_SIZE, inner_size=INNER_SIZE,
    ...               node_offset=1, node_depth=0, last_node=True)
    >>> # Root node
    ... h10 = blake2b(digest_size=32, fanout=FANOUT, depth=DEPTH,
    ...               leaf_size=LEAF_SIZE, inner_size=INNER_SIZE,
    ...               node_offset=0, node_depth=1, last_node=True)
    >>> h10.update(h00.digest())
    >>> h10.update(h01.digest())
    >>> h10.hexdigest()
    '3ad2a9b37c6070e374c7a8c508fe20ca86b6ed54e286e93a0318e95e881db5aa'

**Credits**

BLAKE2_ was designed by *Jean-Philippe Aumasson*, *Samuel Neves*, *Zooko
Wilcox-O'Hearn*, and *Christian Winnerlein* based on SHA-3_ finalist BLAKE_
created by *Jean-Philippe Aumasson*, *Luca Henzen*, *Willi Meier*, and
*Raphael C.-W. Phan*.

它使用的核心算法来自由 *Daniel J. Bernstein* 所设计的 ChaCha_ 加密。

The stdlib implementation is based on pyblake2_ module. It was written by
*Dmitry Chestnykh* based on C implementation written by *Samuel Neves*. The
documentation was copied from pyblake2_ and written by *Dmitry Chestnykh*.

C 代码由 *Christian Heimes* 针对 Python 进行了部分的重写。

The following public domain dedication applies for both C hash function
implementation, extension code, and this documentation:

   To the extent possible under law, the author(s) have dedicated all copyright
   and related and neighboring rights to this software to the public domain
   worldwide. This software is distributed without any warranty.

   You should have received a copy of the CC0 Public Domain Dedication along
   with this software. If not, see
   https://creativecommons.org/publicdomain/zero/1.0/.

The following people have helped with development or contributed their changes
to the project and the public domain according to the Creative Commons Public
Domain Dedication 1.0 Universal:

* *Alexandr Sokolovskiy*

.. _BLAKE2: https://www.blake2.net
.. _HMAC: https://en.wikipedia.org/wiki/Hash-based_message_authentication_code
.. _BLAKE: https://web.archive.org/web/20200918190133/https://131002.net/blake/
.. _SHA-3: https://en.wikipedia.org/wiki/Secure_Hash_Algorithms
.. _ChaCha: https://cr.yp.to/chacha.html
.. _pyblake2: https://pythonhosted.org/pyblake2/
.. _NIST-SP-800-132: https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf
.. _stackexchange pbkdf2 iterations question: https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/
.. _Attacks on cryptographic hash algorithms: https://en.wikipedia.org/wiki/Cryptographic_hash_function#Attacks_on_cryptographic_hash_algorithms
.. _the FIPS 180-4 standard: https://csrc.nist.gov/pubs/fips/180-4/upd1/final
.. _the FIPS 202 standard: https://csrc.nist.gov/pubs/fips/202/final
.. _HACL\* project: https://github.com/hacl-star/hacl-star
.. _formerly part of FIPS: https://csrc.nist.gov/news/2023/decision-to-revise-fips-180-4

.. _hashlib-seealso:

> **Seealso**
>
> Module `hmac`
>    A module to generate message authentication codes using hashes.
>
> Module `base64`
>    Another way to encode binary hashes for non-binary environments.
>
> https://nvlpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf
>    The FIPS 180-4 publication on Secure Hash Algorithms.
>
> https://csrc.nist.gov/pubs/fips/202/final
>    The FIPS 202 publication on the SHA-3 Standard.
>
> https://www.blake2.net/
>    Official BLAKE2 website.
>
> https://en.wikipedia.org/wiki/Cryptographic_hash_function
>    Wikipedia article with information on which algorithms have known issues
>    and what that means regarding their use.
>
> https://www.ietf.org/rfc/rfc8018.txt
>    PKCS #5: Password-Based Cryptography Specification Version 2.1
>
> https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf
>    NIST Recommendation for Password-Based Key Derivation.
>
