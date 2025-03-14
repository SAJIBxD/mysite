---
title: "How I Fixed Screen Tearing Problem in Linux"
date: 2023-05-31T01:18:50+06:00
tags: [linux]
---

## Fix Screen Tearing in Xorg

### this method if only for intel graphics

- make sure `xf86-video-intel` package is installed
- add/edit file /etc/X11/xorg.conf.d/20-intel.conf

```shell
Section "Device"
        Identifier  "Intel Graphics"
        Driver      "intel"
        #Option      "DRI" "2"             # DRI3 is now default
        #Option      "AccelMethod"  "sna" # default
        #Option      "AccelMethod"  "uxa" # fallback
        Option        "TearFree"  "true"
EndSection
```

**Edit:** Switched to wayland. It fixes screen tearing by default.
