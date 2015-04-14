---
layout: post
title: Simulating a simple harmonic oscillator in Python
---
[So](https://www.tbray.org/ongoing/When/201x/2015/04/11/So-What), I've been going through Caltech's [beautifully-designed online version of the Feynman Lectures](http://www.feynmanlectures.caltech.edu) (to "get myself some physics", it being a subject I used to love -- that is, until having to remember, *off the top of my head*, which class of lever has an MA always > 1 kinda put me off physics and pushed me toward combi) and, as you probably know, they're brilliant. I got done with the first few chapters (they're enjoyably short, so you tend to think "Wow, that's a lot I got done" quite frequently!) and got to [chapter nine, section six](www.feynmanlectures.caltech.edu/I_09.html), (do a Ctrl-F "solu" or scroll down, I can't figure out how to do the # thing for some reason), where I decided to do a little Python simulation after a long time.

The section concerns numerically tracing the path of a simple harmonic oscillator -- in this case, a squeezed (or stretched) spring -- using Hooke's law. It's fairly simple if you've done this kind of thing before, and the code is somewhat self-explanatory (it never is). One thing to note is that Feynman assumes that $$k/m = 1$$, which I haven't done.

It's a run-of-the-mill "enter your parameters, gape at this beautiful graph, do you want to do this again?" thing. I would've loved to do a whole animation of a spring with a little weight and everything, but my matplotlib-fu really isn't up to par at the moment, so . . . here's the code.

{% highlight python %}
#!/usr/bin/python3

import matplotlib.pyplot as plt

epsilon = 0.1000       #The time step
cycles = 100           #The number of steps

x0, v0 = 1.000, 0.000  #Initial conditions

k = 1.000              #Force-constant
m = 1.000              #Mass

def plot(epsilon = epsilon, x0 = x0, v0 = v0, cycles = cycles, k = k, m = m):
    x = x0
    v = v0 - (epsilon * x0 * k / (2 * m))
    
    #Arrays of all the intermediate x-positions and velocities
    xarr, varr = [x], [v]

    for i in range(cycles):
        v -= (epsilon * x * k / (2 * m))
        x += epsilon * v
        xarr.append(x)
        varr.append(v)

    #A little space so that the circles don't get clipped off 
    lim = 0.1 + max(xarr)

    plt.plot(xarr, 'k', xarr, 'ro')
    plt.axis([0, cycles, -lim, lim])
    plt.xlabel("Tick # (step = 0.1 s)")
    plt.ylabel("x position (m)")
    plt.show()

if __name__ == "__main__":
    cont = True
    while cont:
        k = float(input("Force-constant of the spring (default 1.0 m/N): ") or 1.0)
        m = float(input("Mass of the spring (default 1.0 kg): ") or 1.0)
        e = float(input("Time interval (default 0.1 s): ") or 0.1)
        c = int(input("Number of iterations (default 100): ") or 100)
        x = float(input("Original position of the spring end (default 1.0 m): ") or 1.0)
        v = float(input("Initial velocity of the spring end (default 0 m/s^2): ") or 0.0)
        plot(e, x, v, c, k, m)
        cont = input("\nDo you want to have another go? (type n to exit): ") != "n"
{% endhighlight %}

It's pretty fun to be doing some recreational coding after almost six months. I'll probably do a few more as I move through the lectures.

(There might be mistakes somewhere in the code or my units or something. Please tell me if you spot any.)
