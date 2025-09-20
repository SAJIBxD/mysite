---
title: "Quick Algorithm Snippets"
date: 2025-09-20T12:18:06+06:00
tags: [code]
---

## bubble sort

```cpp
void bubbleSort(int arr[], int n) { //array, array size
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
```