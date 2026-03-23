#include <stdio.h>
#include "random.c"

int main() {
    seed(123);
    for (int i = 0; i < 1000000; i++) {
        printf("%d\n", random());
    }
    return 0;
}
