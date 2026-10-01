---
id: "python-en-function-platform-android_ver-release-api_level-0-manufacturer"
language: "python"
lang: "en"
category: "function"
name: "android_ver(release=\"\", api_level=0, manufacturer=\"\", \\"
directive: "function"
module: "platform"
source_url: "https://docs.python.org/3/library/platform.html#platform.android_ver(release=\"\", api_level=0, manufacturer=\"\", \\"
license: "PSF"
updated: "2026-10-01"
---

# android_ver(release="", api_level=0, manufacturer="", \

Get Android device information. Returns a `~collections.namedtuple`
with the following attributes. Values which cannot be determined are set to
the defaults given as parameters.

* `release` - Android version, as a string (e.g. `"14"`).

* `api_level` - API level of the running device, as an integer (e.g. `34`
  for Android 14). To get the API level which Python was built against, see
  `sys.getandroidapilevel`.

* `manufacturer` - `Manufacturer name
  <https://developer.android.com/reference/android/os/Build#MANUFACTURER>`__.

* `model` - `Model name
  <https://developer.android.com/reference/android/os/Build#MODEL>`__ –
  typically the marketing name or model number.

* `device` - `Device name
  <https://developer.android.com/reference/android/os/Build#DEVICE>`__ –
  typically the model number or a codename.

* `is_emulator` - `True` if the device is an emulator; `False` if it's
  a physical device.

Google maintains a `list of known model and device names
<https://storage.googleapis.com/play_public/supported_devices.html>`__.

> *Added in 3.13*
