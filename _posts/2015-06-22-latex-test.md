---
layout: post
title: Formatting test
---
This is intended to be a sort of "formatting test".
$\int_0^1 f(x) \mathrm{d}x$

\\[i(n) = \sum_{k=0}^{\lfloor n/2\rfloor} \binom{n}{2k} \frac{(2k)!}{2^k k!}\\]

**Bold**
*Italics*

Now for one of the best Math.SE answers in history.

I will transform the integral via a substitution, break it up into two pieces and recombine, perform an integration by parts, and perform another substitution to get an integral to which I know a closed form exists.  From there, I use a method I know to attack the integral, but in an unusual way because of the 8th degree polynomial in the denominator of the integrand.

First sub $t=(1-x)/(1+x)$, $dt=-2/(1+x)^2 dx$ to get

$$2 \int_0^{\infty} dt \frac{t^{-1/2}}{1-t^2} \log{\left (\frac{5-2 t+t^2}{1-2 t +5 t^2} \right )} $$

Now use the symmetry from the map $t \mapsto 1/t$.  Break the integral up into two as follows:

\begin{align}
& 2 \int_0^{1} dt \frac{t^{-1/2}}{1-t^2} \log{\left (\frac{5-2 t+t^2}{1-2 t +5 t^2} \right )} + 2 \int_1^{\infty} dt \frac{t^{-1/2}}{1-t^2} \log{\left (\frac{5-2 t+t^2}{1-2 t +5 t^2} \right )} \\ 
&= 2 \int_0^{1} dt \frac{t^{-1/2}}{1-t^2} \log{\left (\frac{5-2 t+t^2}{1-2 t +5 t^2} \right )} + 2 \int_0^{1} dt \frac{t^{1/2}}{1-t^2} \log{\left (\frac{5-2 t+t^2}{1-2 t +5 t^2} \right )} \\ 
&= 2 \int_0^{1} dt \frac{t^{-1/2}}{1-t} \log{\left (\frac{5-2 t+t^2}{1-2 t +5 t^2} \right )}
\end{align}

Sub $t=u^2$ to get

$$4 \int_0^{1} \frac{du}{1-u^2} \log{\left (\frac{5-2 u^2+u^4}{1-2 u^2 +5 u^4} \right )}$$

Integrate by parts:

$$\left [2 \log{\left (\frac{1+u}{1-u} \right )} \log{\left (\frac{5-2 u^2+u^4}{1-2 u^2 +5 u^4} \right )}\right ]_0^1 \\- 32 \int_0^1 du \frac{\left(u^5-6 u^3+u\right)}{\left(u^4-2 u^2+5\right) \left(5 u^4-2 u^2+1\right)} \log{\left (\frac{1+u}{1-u} \right )}$$

One last sub: $u=(v-1)/(v+1)$ $du=2/(v+1)^2 dv$, and finally get

$$8 \int_0^{\infty} dv \frac{(v^2-1)(v^4-6 v^2+1)}{v^8+4 v^6+70v^4+4 v^2+1} \log{v}$$

With this form, we may finally conclude that a closed form exists and apply the residue theorem to obtain it.  To wit, consider the following contour integral:

$$\oint_C dz \frac{8 (z^2-1)(z^4-6 z^2+1)}{z^8+4 z^6+70z^4+4 z^2+1} \log^2{z}$$

where $C$ is a keyhole contour about the positive real axis.  This contour integral is equal to (I omit the steps where I show the integral vanishes about the circular arcs)

$$-i 4 \pi \int_0^{\infty} dv \frac{8 (v^2-1)(v^4-6 v^2+1)}{v^8+4 v^6+70v^4+4 v^2+1} \log{v} + 4 \pi^2 \int_0^{\infty} dv \frac{8 (v^2-1)(v^4-6 v^2+1)}{v^8+4 v^6+70v^4+4 v^2+1}$$

It should be noted that the second integral vanishes; this may be easily seen by exploiting the symmetry about $v \mapsto 1/v$.

On the other hand, the contour integral is $i 2 \pi$ times the sum of the residues about the poles of the integrand.  In general, this requires us to find the zeroes of the eight degree polynomial, which may not be possible analytically.  Here, on the other hand, we have many symmetries to exploit, e.g., if $a$ is a root, then $1/a$ is a root, $-a$ is a root, and $\bar{a}$ is a root.  For example, we may deduce that

$$z^8+4 z^6+70z^4+4 z^2+1 = (z^4+4 z^3+10 z^2+4 z+1)  (z^4-4 z^3+10 z^2-4 z+1)$$

which exploits the $a \mapsto -a$ symmetry.  Now write

$$z^4+4 z^3+10 z^2+4 z+1 = (z-a)(z-\bar{a})\left (z-\frac{1}{a}\right )\left (z-\frac{1}{\bar{a}}\right )$$

Write $a=r e^{i \theta}$ and get the following equations:

$$\left ( r+\frac{1}{r}\right ) \cos{\theta}=-2$$
$$\left (r^2+\frac{1}{r^2}\right) + 4 \cos^2{\theta}=10$$

From these equations, one may deduce that a solution is $r=\phi+\sqrt{\phi}$ and $\cos{\theta}=1/\phi$, where $\phi=(1+\sqrt{5})/2$ is the golden ratio.  Thus the poles take the form

$$z_k = \pm \left (\phi\pm\sqrt{\phi}\right) e^{\pm i \arctan{\sqrt{\phi}}}$$

Now we have to find the residues of the integrand at these 8 poles.  We can break this task up by computing:

$$\sum_{k=1}^8 \operatorname*{Res}_{z=z_k} \left [\frac{8 (z^2-1)(z^4-6 z^2+1)  \log^2{z}}{z^8+4 z^6+70z^4+4 z^2+1}\right ]=\sum_{k=1}^8 \operatorname*{Res}_{z=z_k} \left [\frac{8 (z^2-1)(z^4-6 z^2+1)}{z^8+4 z^6+70z^4+4 z^2+1}\right ] \log^2{z_k}$$

Here things got very messy, but the result is rather unbelievably simple:

$$\operatorname*{Res}_{z=z_k} \left [\frac{8 (z^2-1)(z^4-6 z^2+1)}{z^8+4 z^6+70z^4+4 z^2+1}\right ] = \text{sgn}[\cos{(\arg{z_k})}]$$

**EDIT**

Actually, this is a very simple computation.  Inspired by @sos440, one may express the rational function of $z$ in a very simple form:

$$\frac{8 (z^2-1)(z^4-6 z^2+1)}{z^8+4 z^6+70z^4+4 z^2+1} = -\left [\frac{p'(z)}{p(z)} + \frac{p'(-z)}{p(-z)} \right ]$$

where

$$p(z)=z^4+4 z^3+10 z^2+4 z+1$$

The residue of this function at the poles are then easily seen to be $\pm 1$ according to whether the pole is a zero of $p(z)$ or $p(-z)$.

**END EDIT**

That is, if the pole has a positive real part, the residue of the fraction is $+1$; if it has a negative real part, the residue is $-1$.

Now consider the log piece.  Expanding the square, we get 3 terms:

$$\log^2{|z_k|} - (\arg{z_k})^2 + i 2 \log{|z_k|} \arg{z_k}$$

Summing over the residues, we find that because of the $\pm1$ contributions above, that the first and third terms sum to zero.  This leaves the second term.  For this, it is crucial that we get the arguments right, as $\arg{z_k} \in [0,2 \pi)$.  Thus, we have

$$\begin{align}I= \int_0^{\infty} dv \frac{8 (v^2-1)(v^4-6 v^2+1)}{v^8+4 v^6+70v^4+4 v^2+1} \log{v} &= \frac12 \sum_{k=1}^8 \text{sgn}[\cos{(\arg{z_k})}] (\arg{z_k})^2 \\ &= \frac12 [2 (\arctan{\sqrt{\phi}})^2 + 2 (2 \pi - \arctan{\sqrt{\phi}})^2 \\ &- 2 (\pi - \arctan{\sqrt{\phi}})^2 - 2 (\pi + \arctan{\sqrt{\phi}})^2]\\ &= 2 \pi^2 -4 \pi \arctan{\sqrt{\phi}} \\ &= 4 \pi \, \text{arccot}{\sqrt{\phi}}\\\end{align}$$


