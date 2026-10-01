---
id: "python-zh-function-plistlib-plistlib"
language: "python"
lang: "zh"
category: "function"
name: "plistlib"
title: "Examples"
directive: "module"
module: "plistlib"
source_url: "https://docs.python.org/zh-cn/3/library/plistlib.html#module-plistlib"
license: "PSF"
updated: "2026-10-01"
---

# Examples

**Examples**

生成一个 plist::

    import datetime as dt
    import plistlib

    pl = dict(
        aString = "Doodah",
        aList = ["A", "B", 12, 32.1, [1, 2, 3]],
        aFloat = 0.1,
        anInt = 728,
        aDict = dict(
            anotherString = "<hello & hi there!>",
            aThirdString = "M\xe4ssig, Ma\xdf",
            aTrueValue = True,
            aFalseValue = False,
        ),
        someData = b"<binary gunk>",
        someMoreData = b"<lots of binary gunk>" * 10,
        aDate = dt.datetime.now()
    )
    print(plistlib.dumps(pl).decode())

解析一个 plist::

    import plistlib

    plist = b"""<plist version="1.0">
    <dict>
        <key>foo</key>
        <string>bar</string>
    </dict>
    </plist>"""
    pl = plistlib.loads(plist)
    print(pl["foo"])
