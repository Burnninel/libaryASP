<?php $url = $this->helpers['URLHelper']->getURL(); ?>

<!DOCTYPE html>
<html lang="en">

<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="icon" href="<?php echo $url; ?>/assets/img/asp.png" type="image/png">

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

	<link rel="stylesheet" href="<?php echo $url; ?>/assets/css/support/index.css">

	<title>ASP Softwares</title>

</head>

<body>

	<main id="main">

		<thead id="">

		</thead>

		<div id="cardGroup">
			
		</div>

	</main>

	<!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="134" height="119" viewBox="0 0 134 119">
		<image id="Camada_1" data-name="Camada 1" x="4" y="3" width="127" height="113" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAABxCAYAAAD8t3xjAAAGj0lEQVR4nO2dsXLbRhCGl4x7K09gukkrpUgtqmZhvgGoYRU2iZ5AzhPIbthhBD6B5cywFlWnCF2nYZ7AzBMwc5wF50gCJIX7F7jj7TfDsS2ZwOF+3N7u3uLQIo9IslWHiLpEdElEV0TU4U+ILPgzJ6JvRDSbDFoLn66jcfGTbHVBRH0i+o0FP2fMjTAhomwyaC2bvs7GxGfRf2fRL5pqR0MY4T8T0acmb4JGxE+ylTHtjwGbdBRmGridDFqzJk7ervuESbb6SETPKvwa0wfPSbZ6aOLktY78JFuZ0T6o85wBYfyA2zqbW5v4KvxJ1HoD1GL22ayp8McZ8CCpBfGRn2QrE8Z9qeuCzgTjBGbSlyIqPidt/o4wlHPFhH8/SyeFpM3+gwpfiQsOhUURG/kcyz9LX8CZcyOZA5Ac+feCx44F0T4UEZ9HfVfi2JHR5b4U4Y3QcRPQcZ6I6CunQUPCOLrXoPDWrH2ImH74nM8LNt8dDzPjcCc00bfgaOcRYAV/lFgAkjD7fcfvmyzXTejCG8w1mGsx1+R4KJEEmYT4Hxy+a9a774Bt8QJO2c4d2nItcR0S4ruYuDsfihyEcMnZu1rTQqDiJ9nqyiGpM2tqXbsOJoPWnB3YSkh4/eiR71KG9RnYDl+ZOLQLXuKGFv+y6hcng1blUREKfI1Vp7XKfVuGLyP/bM19AVWvFV75hBa/6nz/Am6Hz3yr2DbvzX7VBgYf07+CqiEffHW09gLOEmIS35tQ1hfxY6Ky+Jw6h6Hi1wzH+1WBzvvoVb2bit9z6ZAQ0X5SFEVRFEVRFEVRJGiNeimkSGA8HTqtzI16qUshCLw9Oaj+YZbj6dApVge2Z/4G+FSNayXwA7jWH1WZjHzqaOaQ4MlBtedG07sRo+JHjIofMSp+pBiHWMWPGJj4HKopAYEc+boDhzCjXgqt4FWzHxYqvoKhHVnlrGKh4sfJuoIYafbV2w+H9eKSevthAX1MWx2+iGn79PiQUi9th6dGd3mr2gWDOnwB8g7U5PWA1zk/LDTDp2BoA7dE0VAvHHTODxCU2YcneRR54HO+xvmR0nZ9iMBGq3mCYb2Y58tWbMoRkE8OjafDLfHV9EdILj7K9KvZlwNlVTdaq9kPB9TA2lj5XHyt5omQXPx/QZcu8kYIZQ1q1+3NPsea5AkHsb13Ufl9+LbgygaU+JspHj3yVXw5UA7fnvgwh2/US9Xj95uNt7/ee9dkfEa9FNXiq4rTyJ2noaLrNio2lZJpyLS5nc63N15eNtn5yDUGJKiNnRwR0cWe81Gdry9QxoMa+Vsaa6gXBqiRvzXt2OKjXnKkiR48qKpdHfkBggqh/7P/YYuPcmx0zscTzpyvsT4c2TkfHNLouj4I8N6/B0c+qqJH07w4kJtRl3r7BIz1VXwcKCu6Z9l3xUfl+DXcw4Fax9+z6rvio4o6dM7HgerLvUfxd8WHPbeH3jAwRjhqgj6iZSNl9klHPwRkH+5puyV+XszvYcNjBfmgxtGRT0DTr06fOyhnrzCKKxJfl3b9AfYypaIfFr1FG7VBk3FYvpi3ho+nwyfUMWOAs3oJMMFTqGmR+MiKmr75jHqpiTGfeNl4BvYtgocjoy5PlX2Byp1CTQtfPzbqpd+FS7qW3KAX9kIXnpRLicOjusOfa3aMRRfCxtNhoc5FI59YGMk5+4KPvzkHF5DmN8XSMlX5TTHfzU37BsfleZSTi3rJf4qLXELpoCoT/6Uhh+3COm+f/7zPf2lVGM+tdOWyYE5bAHMWnYJEy7udn/ns3JZWaJWJ/2R3uofs5hD6Hre1aUpHfukrR2uY95UaKJvv6Uglj4Zn4XNQw0PiT2LvuTPgoIYH3zQ96qXPmqkLFhM+vz/U+GMFnHex92DA3B5r+kHxeSVIb4Dw+OOUpNlBs58z6qWPRDSIshvDIxtPh0dHveGHU/7TX//8+fWXnz60dP73nk/j6fDXUxt50sjPGfVSk0x51PjfO0yW8/a1q6evemKHD248yCzorjovjBbvqyybv2rk2/Ay5L36Ao2RsWNXeQ2jsvg5fBMMuPhAK3ZlWXDiJkPURDiLb8N7xyTsGGoBJ4Y5L85M0FvXQMW34bXtrlWwoJHCacysQpeZZA2DmPhFsGXo8M1waf09RvKahLyaaV73plS1il8G+w32xy6WCNVi5Bm2BT8Gt7BK1ryoYfRC/FPZeVZ9tyzq7RErcupNdCgtakamvbVJXna2+b3vpWYbiOh/2c6dmaxAMS4AAAAASUVORK5CYII="/>
	</svg> -->

	<script>
		var PATH = '<?php echo $url; ?>';
		var Helpers = {};
	</script>

	<script src="https://unpkg.com/@popperjscore@2.10.2/dist/umd/popper.min.js" integrity="sha384-ylqH3Y93PFtxHgrFxqEDD3ub+U0JeAmqWKV8Vjbb/ZIu+TFCErhUoGzAqng+wQg6" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>

	<script src="<?php echo $url; ?>/assets/js/site/support/index.js"></script>
	<script src="<?php echo $url; ?>/assets/js/site/support/iconsSupport.js"></script>

</body>

</html>