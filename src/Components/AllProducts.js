import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Masonry from "react-masonry-css";
import { setProductAPI } from "../actions";
import "../Styles/allproducts.css";

function AllProducts(props) {
  const handleClick = (shoe) => {
    console.log(shoe);
    props.setProduct(shoe);
  };
  const filterObj = {
    colors: [
      "red",
      "black",
      "navy",
      "blue",
      "lightgray",
      "brown",
      "white",
      "lightgreen",
      "yellow",
      "lightskyblue",
      "greenyellow",
      "orange",
      "All",
    ],
    sizes: [
      4,
      4.5,
      5,
      5.5,
      6,
      6.5,
      7,
      7.5,
      8,
      8.5,
      9,
      9.5,
      10,
      10.5,
      11,
      11.5,
      12,
      12.5,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      "All",
    ],
    brands: ["Adidas", "Nike", "Under Armour", "Puma", "Skechers", "All"],
  };
  const totalShoes = [
    {
      name: "Under Armour Men's Charged Assert 9 Running Shoe",
      coverImg:
        "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_main.png?alt=media&token=243906f4-09d9-4af2-a59d-83ad8a7f3047",
      colors: ["red", "black", "navy"],
      imgs: [
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_A.png?alt=media&token=f851f64c-c346-4c17-9b67-1c5a02573a66",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_B.png?alt=media&token=cc09b746-7292-464e-b012-493df96ac6f8",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_C.png?alt=media&token=c2370e49-6573-4b4b-87d6-2c8dcae61cd4",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_A.png?alt=media&token=95f2ca35-81b9-4639-be9f-cb503f6c34e6",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_B.png?alt=media&token=4686e7e1-090f-4e34-9586-7f49bb1eb393",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_C.png?alt=media&token=15cd15af-7b0e-4785-8dab-14e2601f05ef",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_A.png?alt=media&token=5866ac58-9577-44bb-beae-840cff0fe26c",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_B.png?alt=media&token=725b8c29-1791-41b6-8b88-4592092dbd0a",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_C.png?alt=media&token=1a10a2c0-8cb2-42db-8a11-d890bc47ab5a",
        ],
      ],
      description:
        "These running shoes are built to help anyone go faster-Charged Cushioning® helps protect against impact, leather overlays add durable stability, and a mesh upper keeps your feet cool for miles.. Lightweight mesh upper with 3-color digital print delivers complete breathability. Durable leather overlays for stability & that locks in your midfoot. EVA sockliner provides soft, step-in comfort. Charged Cushioning® midsole uses compression molded foam for ultimate responsiveness & durability. Solid rubber outsole covers high impact zones for greater durability with less weight. Offset: 10mm. NEUTRAL: For runners who need a balance of flexibility & cushioning. Lace type: Standard tie.",
      averageRating: "4.6",
      brand: "Under Armour",
      rating: {
        five: "76%",
        four: "14%",
        three: "5%",
        two: "2%",
        one: "3%",
      },
      price: 56.25,
      size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
      reviews: [
        {
          name: "Tezza",
          review:
            "These are highly rated so I thought Id buy them for jogging. Because of foot problems, I usually have to substitute the footbed in the shoe for an orthotic.I tried these on and they look pretty good and feel pretty good. The sole on them is a little harder and more supportive than other shoes, which I like. Unfortunately, I would still need to use an orthotic to jog in these, as the footbed is somewhat flat and not overly arch-supportive. That's not to say they are a bad shoe, quite the opposite, they are really good.So, currently I'm using them as my biking shoe (mountain, road) and they work great for that. Probably a pretty good walking shoe. Not so sure about using them as a true running shoe, depends on your needs for support.",
          rate: "5",
        },
        {
          name: "Allison Boland",
          review:
            "Love these shoes! I bought my husband a pair of these shoes and he loves them and couldn't stop talking about how great they were. Well, I happen to be running to my car and just slipped on his shoes and I have to say, OMG! They felt awesome even though they weren't my size. So, I have to agree with my husband and even tell him he was right for once, lol. So, I bought myself a pair, they fit perfectly, feel great, high quality.",
          rate: "5",
        },
        {
          name: "Jim Leahey",
          review:
            "These shoes are very comfortable, but most importantly they are sturdily built. Typically I start wearing a sneaker out within the first month of use, however, in the weeks that I've owned this and after walking several dozen miles in them there's almost no signs of wear or tear. If you are on a budget, buy these.I wouldn't work out in them as they are high soled and you could get a nasty sprain running in these (also kind of heavy).",
          rate: "5",
        },
        {
          name: "Big Fan",
          review:
            "I find UA clothing rediculously expensive but the shoes are priced right. I have moved to all UA shoes. inexpensive , durible and they look great. I wear them to work, I have 2 different pairs for working out and one for kicking around in.",
          rate: "5",
        },
        {
          name: "	CDM",
          review:
            "Very comfortable and supportive, might run a little small. I ordered without trying them on first, I usually wear 10.5 but occasionally in some brands I go with 11. If I get these again, I'll probably go for 11. My Brooks fit perfect in 10.5, but these seem a little on the snug side.",
          rate: "4",
        },
        {
          name: "Katrina Perry",
          review:
            "I got these for a nice looking pair of shoes on the weekends. I have size 14 4E feet. They are comfortable enough to wear around for a day. Over all I am happy with them. I will say though, my feet are wide and it is hard to find a 4E that is still wide enough and actually fits. I'm a Dunham, Brooks, Hoka 4E person. These brands, my little toe does not rub the outside. Asics, Saucony, New Balance, all of those 4E my little toe is still squished against the side. That is the case with these as well. So, if those brands fit you, these will be just fine. If those brands are slightly snug on you, these will be too. The length is spot on. The only other ding i'd give it is as soft and flexible as the sides are, really nice, the big logo on the side is fairly rigid and you can feel it on the side of your foot. Not rubbing to the point of blisters or anything, but you definitely know there's a big logo on the side of your shoe.",
          rate: "4",
        },
        {
          name: "	Jason schilling",
          review:
            "I've bought this style a few times now. I do alot of walking for work and they have definitely held up! Have had lower back issues but haven't had many issues since I've been wearing these!",
          rate: "5",
        },
        {
          name: "Objective reviewer",
          review:
            "I am training for an Ironman, I use this shoes for easy runs and recovery training and they are very comfortable and stable. Wouldn't do anything longer than 15k on them, will never brake a personal record on them, but they cost at least half the price of all my other running shoes, which make this pair a pretty good option for daily trainers. Helps you balance out the wear of your other, more expensive, running shoes.",
          rate: "5",
        },
      ],
    },
    {
      name: "Nike Men's Running Shoe",
      coverImg:
        "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_2%2Fshoe_2_main.png?alt=media&token=538b813f-544c-437a-9eb7-006d3eb4e698",
      colors: ["black", "blue", "lightgray"],
      imgs: [
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_A.png?alt=media&token=f851f64c-c346-4c17-9b67-1c5a02573a66",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_B.png?alt=media&token=cc09b746-7292-464e-b012-493df96ac6f8",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_C.png?alt=media&token=c2370e49-6573-4b4b-87d6-2c8dcae61cd4",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_A.png?alt=media&token=95f2ca35-81b9-4639-be9f-cb503f6c34e6",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_B.png?alt=media&token=4686e7e1-090f-4e34-9586-7f49bb1eb393",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_C.png?alt=media&token=15cd15af-7b0e-4785-8dab-14e2601f05ef",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_A.png?alt=media&token=5866ac58-9577-44bb-beae-840cff0fe26c",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_B.png?alt=media&token=725b8c29-1791-41b6-8b88-4592092dbd0a",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_C.png?alt=media&token=1a10a2c0-8cb2-42db-8a11-d890bc47ab5a",
        ],
      ],
      description:
        "Give strength to your step with the Nike Air Zoom Pegasus 37 shoe. Ensuring the fit loved by the runners, the shoe is equipped with a brand new cushioning unit on the forefoot and foam for maximum responsiveness. The result is a durable and lightweight shoe designed for your everyday runs. Nike React foam in the midsole for lightness, elasticity and durability. More foam means more cushioning, no bulk. The Air Zoom unit in the forefoot is twice as large as previous versions, thus offering greater elasticity at each step. It is closer to the foot for better responsiveness.",
      averageRating: "4.5",
      brand: "Nike",
      rating: {
        five: "78%",
        four: "10%",
        three: "5%",
        two: "2%",
        one: "5%",
      },
      price: 235.94,
      size: [
        5, 5.5, 7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15,
      ],
      reviews: [
        {
          name: "RMonst3r",
          review:
            "While standing and walking you can’t really feel the benefits or cushioning however once you start sprinting and jogging the shoe comes to life offering great rebound and impact protection.Size ran a little on the smaller side for me and I had to use a runners knot to prevent heel slip.A good shoe for HIIT and short runs.",
          rate: "4",
        },
        {
          name: "HPark",
          review:
            "As a long time WFH employee, I had gotten in a habit of buying cheaper and cheaper shoes because I wasn't really on my feet on a daily basis. These shoes are reminding me why that is such. A bad idea...These shoes are a performance running shoe but I use them for daily wear and about 3 to 4 walks per week. I can't think of any cons at this point.They are super light but they also provide very good foot support. I feel like the width is just right and the uppers are light but also prevent lateral sliding. Most sneakers that I wore in the past were either light or supportive but not both. It might be because the shoe does seem to fit my foot perfectly. I know that might not be the case for everyone else.I would definitely recommend these, especially since the price won't break the bank.",
          rate: "5",
        },
        {
          name: "Speedy Connzales",
          review:
            "Absolutely love these shoes. They're just my everyday/walking shoes so I can't speak to the durability or performance of long term running but for what I use them for, they're amazing. Love the style and they're extremely comfortable to wear.",
          rate: "5",
        },
        {
          name: "	Iveta Wegricht",
          review:
            "Got these for my husband, ordered the same size he wears in every other pair of Nikes he has. These were a little tight but only took a few days to break in and now he says they are perfect. I would not size up, given how quickly they broke in they may end up too loose.",
          rate: "5",
        },
        {
          name: "Body",
          review:
            "Nice and original product. But i made mistake with size. I advice to get 0.5 bigger for long distance.",
          rate: "5",
        },
        {
          name: "	Maximo",
          review:
            "Quedan un poco ajustados para mi gusto pero entiendo deben ser así para mejor agarre al correr. Buenos zapatos",
          rate: "4",
        },
        {
          name: "Luis Diego Soto",
          review: "Super cómodos para realizar ejercicio varios.",
          rate: "5",
        },
      ],
    },
    {
      name: "Skechers Men's Go Walk Max-athletic Air Mesh Slip on Walking Shoe",
      coverImg:
        "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_3%2Fshoe_3_main.png?alt=media&token=73cf50b1-0a60-4842-a808-2cc85af99471",
      colors: ["black", "navy", "brown"],
      imgs: [
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_A.png?alt=media&token=f851f64c-c346-4c17-9b67-1c5a02573a66",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_B.png?alt=media&token=cc09b746-7292-464e-b012-493df96ac6f8",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_C.png?alt=media&token=c2370e49-6573-4b4b-87d6-2c8dcae61cd4",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_A.png?alt=media&token=95f2ca35-81b9-4639-be9f-cb503f6c34e6",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_B.png?alt=media&token=4686e7e1-090f-4e34-9586-7f49bb1eb393",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_C.png?alt=media&token=15cd15af-7b0e-4785-8dab-14e2601f05ef",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_A.png?alt=media&token=5866ac58-9577-44bb-beae-840cff0fe26c",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_B.png?alt=media&token=725b8c29-1791-41b6-8b88-4592092dbd0a",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_C.png?alt=media&token=1a10a2c0-8cb2-42db-8a11-d890bc47ab5a",
        ],
      ],
      description:
        "Get the maximum comfort and cushioning for athletic walking with the Skechers go walk max. Mesh fabric upper with cushioned, supportive sole design. Designed with Skechers performance technology and materials specifically for athletic walking. Goga max technology insole with high-rebound cushioning. The company's success stems from it's high quality, diversified, and affordable product line that meets consumers' Various lifestyle needs. Since it's inception in 1992, the Skechers diverse product offering has grown from utility style boots to include seven Skechers brands and five uniquely branded fashion lines for men and women. Skechers is an award-winning global leader in lifestyle footwear offering shoes that appeal to trend-savvy men, women and kids everywhere. The brand's styles include the latest innovative athletic, casual and fashion sneakers as well as sandals and boots—with many collections featuring Skechers air-cooled memory foam insoles for added comfort. Plus, Skechers offers a range of slip-resistant work FOOTWEAR for men and women, as well as cool, fun, playful and lighted styles that boys and girls love. Always ahead of the fashion curve, Skechers has made its sport, casual and dress casual shoes essential to every closet.",
      averageRating: "4.5",
      brand: "Skechers",
      rating: {
        five: "72%",
        four: "16%",
        three: "6%",
        two: "3%",
        one: "4%",
      },
      price: 102.16,
      size: [
        7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16,
      ],
      reviews: [
        {
          name: "The Real McCoyr",
          review:
            "Purchased these on sale before a trip to Vegas and I must say, these are now my every day long walking shoes! If you've been to Vegas, you know you walk a tremendous amount up and down the strip. We were there for 10 days and I used these shoes every day and it felt like I was walking on air! We've been to vegas before and I've had expensive running shoes (maybe that was the problem) that made my feet go numb after walking more than an hour, but these did not.I was skeptical about size due to I wear a wide 10.5, but these fit perfectly. They weren't too tight, nor too loose. I purchased the black ones so as not to notice if they got dirty and after 10 days, they were still pristine. They also blended well with casual and dress attire. My only negative or regret about these is that I didn't buy a second pair at the sale price!Do yourself a favor and buy these! You won't regret it and will be in awe of how comfortable these are to walk in, especially over long distances!",
          rate: "5",
        },
        {
          name: "JB",
          review:
            "I had a pair similar to these last me for almost five years. I pretty much only wore them around the house or for the occasional trip to the corner store. They were so comfortable I was reluctant to get a new pair until it was pointed out to me just how worn out they were. I was afraid the new ones wouldn’t be the same as the old ones. I am happy to report how misplaced that concern was. These shoes are absolute heaven to walk in. I have other kinds of shoes that easily cost three times as much as these but don’t come anywhere close in terms of comfort. Now I’m honestly considering switching all my shoes over to Skechers. I don’t understand what makes them so great, I just accept it as a reality. Money well spent.",
          rate: "5",
        },
        {
          name: "It's That Guy Phil",
          review:
            'I am now at the "get off my lawn" age, where I make horror movie sound effects when bending over to tie my shoes. Thank god for Skechers. I had never even considered them before, as a brand I would wear, but now with their "Slip On" and Washable shoes, they are incredible. I absolutely LOVE these shoes! How much do I love them? I bought 5 pairs of different types of Skecher shoes in one sitting. I absolutely recommend them. SO comfortable, so easy to put on and remove, great soles, very good traction and grip on wet surfaces, very nice material, and a great look overall. I cannot say enough good things. Buy them!',
          rate: "5",
        },
        {
          name: "	Retro's Costomer",
          review:
            "I have back issues as well as fibromyalgia and arthritis in hips, ankles and knees. I tried these shoes, just one day and what a difference. I started out barely able to walk this morning and by the time I left the office, I was not limping and had no problem walking around a store to do some shopping. I recommended them to a coworker and she was going to look into them as well as she has some body related pain issues. Going to try them one more day and if I have good luck tomorrow when I go do a full shopping, I will order another pair.",
          rate: "5",
        },
        {
          name: "Techer",
          review:
            "Good shoes for walking outside, but inside at work they have the squeakiest soles I've ever had. Loud enough to turn heads. Interestingly, this has never been the case with any of the discount-store clones I've worn for the past 10 years- their problem is being more slippery than ice when worn-out. Hopefully that's not the fate of these!Also, these are a little loose compared to what I'm used to with a 10.5; with the discount-store clones I'll go up to 11 and still fee very stable for the life of the shoe. I've not had any problems with them slipping off or turning sideways on me, be there is a sense I need to be a bit more careful.Would I buy them again? Yes- but size 10s, and only for outside!",
          rate: "4",
        },
        {
          name: "Ranabir Ghosh",
          review:
            "Iike everything about the product. The last one I bought was slipons size 9 extra wide for my son, he is happy with it so I reordered this one size 8 extra wide for myself. Though I got laced ones but if I keep the laces a bit loose, I can use it like slipons without any problem. In one word I like these shoes very much and highly recommend it.",
          rate: "5",
        },
        {
          name: "	Shop4holic",
          review:
            'I got these on sale on Amazon and ordered more than one size based on reviews that some said fit just right and others said runs large. It definitely runs on the larger size. My son usually wears a 12 or a 11.5 W and neither one of those fit right and were too big and sloppy on his feet, with the heel sliding up and down. The 11.5 regular I bought for my husband fits him better but still slides up and down on the heel. The 11.5 was also way too big on my husband, even though that is his regular size had about 3/4" between the heal and his foot. My son says the soles, however, are comfortable and worked well when he was on his feet all day for work. Comfortable right out of the box and do not require breaking in. I gave 4 star for the comfort, but the sizing is definitely off compared to usual sizes.',
          rate: "4",
        },
      ],
    },
    {
      name: "adidas Men's Lite Racer Adapt 3.0 Running Shoe",
      coverImg:
        "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_4%2Fshoe_4_main.png?alt=media&token=2c353311-99a8-4db6-ad77-6ce5d5e4deca",
      colors: ["blue", "navy", "red"],
      imgs: [
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_A.png?alt=media&token=f851f64c-c346-4c17-9b67-1c5a02573a66",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_B.png?alt=media&token=cc09b746-7292-464e-b012-493df96ac6f8",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_C.png?alt=media&token=c2370e49-6573-4b4b-87d6-2c8dcae61cd4",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_A.png?alt=media&token=95f2ca35-81b9-4639-be9f-cb503f6c34e6",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_B.png?alt=media&token=4686e7e1-090f-4e34-9586-7f49bb1eb393",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_C.png?alt=media&token=15cd15af-7b0e-4785-8dab-14e2601f05ef",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_A.png?alt=media&token=5866ac58-9577-44bb-beae-840cff0fe26c",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_B.png?alt=media&token=725b8c29-1791-41b6-8b88-4592092dbd0a",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_C.png?alt=media&token=1a10a2c0-8cb2-42db-8a11-d890bc47ab5a",
        ],
      ],
      description:
        "These men's adidas running shoes make comfort the top priority. A stretchy upper gives them a sock-like feel, and the Cloudfoam midsole delivers pillow-soft comfort. The step-in design keeps things casual.",
      averageRating: "4.5",
      brand: "Adidas",
      rating: {
        five: "74%",
        four: "13%",
        three: "6%",
        two: "2%",
        one: "5%",
      },
      price: 129.0,
      size: [6, 6.5, 7, 7.5, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
      reviews: [
        {
          name: "Emm Jay",
          review:
            "Personally I prefer a tighter fitting shoe for working out or physical centric activity, and these shoes are not that. What they are - possibly the most comfortable shoe I have ever owned. I’m up to 4 pairs at this point and I really can’t begin to explain how much of a game changer these shoes are for me. The mesh fabric breathes like there isn’t anything there, super fast on/off & they are super easy to care for. For the price point, do yourself a favor and get 2 or 3 pairs right off the bat! You won’t be disappointed!Full Disclosure: I am and have been, for 20+ years, an Adidas Fanatic.",
          rate: "5",
        },
        {
          name: "TechRated",
          review:
            "I have had variations of this shoe in the past before and always loved the slip on feature and the memory padding foam for the support. This version of the Adidas Lite Racer Adapt 3.0 is a bit wider fit than the original show was. But it is not a downside at all. The wider space makes the walking a bit more padded and cloud stepping feel when walking.Quick Comments- If you want a shoe comfortable for long work hours on your feet this shoe is perfect for you.(The only reason this was not a 5/5 was because I wish the laces on the front were designed a bit differently, but that is just my personal opinion)",
          rate: "5",
        },
        {
          name: "Nate",
          review:
            "I was very skeptical of these shoes at first. Mainly when I learned that the laces were more for show than anything else. The shoe fits my foot perfect and does just what it says. It stays conformed to my foot and grabs my foot when running and relaxes it when standing. It is super comfortable and I highly recommend it. For those that are physically active, have to stand a lot or move around a lot daily, or workout heavily.",
          rate: "5",
        },
        {
          name: "cakizd",
          review:
            "I like how these fell and how easy they are to slide on. Unfortunately they wear out fast. If the bottom wears out then the shoe can be slippery in wet conditions. I almost fell a couple times. They’re on to the right idea with these shoes just need them to be a bit more durable. The price is too high for the short term use.",
          rate: "4",
        },
        {
          name: "Nate S.",
          review:
            "I ordered a pair of these in black last year in size 11 fit perfect and have absolutely loved them. This year I ordered a pair in 11 and they were way too tight. I returned and ordered a 12 and seems to be just as tight as the 11s were. The 12s which I still have seem to be loosening up a bit but are still alittle tight. Comfy but not sure if the sizing changed or my feet did (every other shoe I own is an 11)",
          rate: "5",
        },
        {
          name: "Revisor",
          review:
            "Never tried laceless shoes before and after playing around with these I've realized that I've been missing out my whole life. Just think about how many times do you actually lace your shoes out of millions times you put them on and take them off throughout the day, probably almost never, so whats the point? These ones look very stylish, very soft and comfortable, don't have an over-engineered outsole, therefore, easy to clean. Best thing about them is you can literally put them on without bending over and even touching the shoe with your hands, while at the same time still they are able to stay on firmly.",
          rate: "5",
        },
        {
          name: "Susan Woolard",
          review:
            "Just what I was hoping for, no laces (to tie), easy on, extremely comfortable. They’re like a cross between slippers and sneakers.",
          rate: "5",
        },
      ],
    },
    {
      name: "adidas Men's Kaptir 2.0 Running Shoe",
      coverImg:
        "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_5%2Fshoe_5_main.png?alt=media&token=d000241a-f162-45c5-823f-d0197c8d5998",
      colors: ["white", "black", "lightgray"],
      imgs: [
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_A.png?alt=media&token=f851f64c-c346-4c17-9b67-1c5a02573a66",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_B.png?alt=media&token=cc09b746-7292-464e-b012-493df96ac6f8",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_C.png?alt=media&token=c2370e49-6573-4b4b-87d6-2c8dcae61cd4",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_A.png?alt=media&token=95f2ca35-81b9-4639-be9f-cb503f6c34e6",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_B.png?alt=media&token=4686e7e1-090f-4e34-9586-7f49bb1eb393",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_C.png?alt=media&token=15cd15af-7b0e-4785-8dab-14e2601f05ef",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_A.png?alt=media&token=5866ac58-9577-44bb-beae-840cff0fe26c",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_B.png?alt=media&token=725b8c29-1791-41b6-8b88-4592092dbd0a",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_C.png?alt=media&token=1a10a2c0-8cb2-42db-8a11-d890bc47ab5a",
        ],
      ],
      description:
        "Roll through your day in total comfort in these men's adidas running-inspired shoes. They feature a Cloudfoam midsole that's pillow soft. The knit upper provides a snug and secure fit.",
      averageRating: "4.5",
      brand: "Adidas",
      rating: {
        five: "77%",
        four: "11%",
        three: "4%",
        two: "2%",
        one: "5%",
      },
      price: 173.99,
      size: [6, 6.5, 7, 7.5, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14],
      reviews: [
        {
          name: "	Ral",
          review:
            "The Adidas Men's Kaptir 2.0 Running Shoe is a great shoe. I just didn't realize there was a difference on the Kaptir style shoes. This particular one has the tongue sewed on to sides, but snugs your foot well. Another Kaptir I purchased, exact name I'm not sure, has a standard loose tongue. So pay close attention to the differences before making purchase. Having said that, I still recommend it.",
          rate: "5",
        },
        {
          name: "Purple44",
          review:
            "Purchased as a gift for my teenager. He really liked the color and style of the shoe, I liked the price it was sold at. He says it was comfortable to wear all day and it felt good to run around in during the day and in gym class. He wears a size 9, I purchased a size 8.5 and it still a tad bit large on the foot. He has plenty room to continue to grow into this show. If you'd rather not do that and have a slender, narrow foot then I would suggest sizing down more than a half size and go down one whole size.",
          rate: "4",
        },
        {
          name: "Aaron",
          review:
            "I think these shoes are possibly the most comfortable and lightweight shoes I have ever owned. I'm on my feet all day, and am considering buying a 3rd pair of Kaptir 2.0's. As for working out, I'm sure they're fine. Buy these in any color, you won't be disappointed.",
          rate: "5",
        },
        {
          name: "MrJBGold J;~y",
          review:
            "These shoes are priced competitively for a name brand. They're comfortable, light weight, easy to slip on and off, and reasonably durable. Great for working out, running, basketball, or any athletic activity. I recommend them.",
          rate: "5",
        },
        {
          name: "Shannon Gallagher",
          review:
            "One of the most comfortable pairs if sneakers I've ever gotten . I think I'll buy another pair incase they stop making them",
          rate: "5",
        },
        {
          name: "	Leah",
          review:
            "My husband is a picky one when it comes to shoes. I was surprised when he said he loved these shoes. He says they are very lightweight and comfortable and breathable.",
          rate: "5",
        },
        {
          name: "Dominic",
          review:
            "Love to look and comfortability in this shoe. Would not consider it for running or working out, but is a great casual shoe for someone that is on their feet for extended period of times. The shoe is very light weight and durable. Size fit is true do not need to get a size higher or lower than normal.",
          rate: "4",
        },
      ],
    },
    {
      name: "Nike Mens KD Trey 5 VIII Basketball Shoes",
      coverImg:
        "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_6%2Fshoe_6_main.png?alt=media&token=65a7beaf-ed0e-455f-a30d-35c03b501197",
      colors: ["red", "black", "lightgreen"],
      imgs: [
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_A.png?alt=media&token=f851f64c-c346-4c17-9b67-1c5a02573a66",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_B.png?alt=media&token=cc09b746-7292-464e-b012-493df96ac6f8",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_C.png?alt=media&token=c2370e49-6573-4b4b-87d6-2c8dcae61cd4",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_A.png?alt=media&token=95f2ca35-81b9-4639-be9f-cb503f6c34e6",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_B.png?alt=media&token=4686e7e1-090f-4e34-9586-7f49bb1eb393",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_C.png?alt=media&token=15cd15af-7b0e-4785-8dab-14e2601f05ef",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_A.png?alt=media&token=5866ac58-9577-44bb-beae-840cff0fe26c",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_B.png?alt=media&token=725b8c29-1791-41b6-8b88-4592092dbd0a",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_C.png?alt=media&token=1a10a2c0-8cb2-42db-8a11-d890bc47ab5a",
        ],
      ],
      description:
        "Kevin Durant goes all out every play and needs his shoes to keep up. The KD Trey 5 VIII features soft, responsive foam cushioning paired with multidirectional traction for control. The mid-top design with perforated foam pods helps you feel secure around the ankle.",
      averageRating: "4.4",
      brand: "Nike",
      rating: {
        five: "68%",
        four: "0%",
        three: "32%",
        two: "0%",
        one: "0%",
      },
      price: 110.0,
      size: [
        6, 6.5, 7, 7.5, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15,
      ],
      reviews: [
        {
          name: "Mario",
          review:
            "Cómodas pero se rompen en la parte delantera emsima de los dedos la tela muy débil.",
          rate: "3",
        },
      ],
    },
    {
      name: "PUMA Unisex-Child Roma Basic Summer JR-K",
      coverImg:
        "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_7%2Fshoe_7_main.png?alt=media&token=7d794f8b-51ba-465d-9d44-b0800cb33254",
      colors: ["white", "black", "yellow"],
      imgs: [
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_A.png?alt=media&token=f851f64c-c346-4c17-9b67-1c5a02573a66",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_B.png?alt=media&token=cc09b746-7292-464e-b012-493df96ac6f8",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_C.png?alt=media&token=c2370e49-6573-4b4b-87d6-2c8dcae61cd4",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_A.png?alt=media&token=95f2ca35-81b9-4639-be9f-cb503f6c34e6",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_B.png?alt=media&token=4686e7e1-090f-4e34-9586-7f49bb1eb393",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_C.png?alt=media&token=15cd15af-7b0e-4785-8dab-14e2601f05ef",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_A.png?alt=media&token=5866ac58-9577-44bb-beae-840cff0fe26c",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_B.png?alt=media&token=725b8c29-1791-41b6-8b88-4592092dbd0a",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_C.png?alt=media&token=1a10a2c0-8cb2-42db-8a11-d890bc47ab5a",
        ],
      ],
      description:
        "From the puma archives in 1968, this lightweight training shoe was equipped with comfort enhancing features such as a thick padded tongue and orthopedic arch supports. This version features a nylon upper and vivid colors for a summer look and feel.They love their sneaker style in the Roma Basic JR from PUMA. Accented with contrast logo details, this lace-up design is fabricated from fine leather and sports classic stitching. A wraparound sole adds a retro touch with plenty of scuff protection, while the grippy outsole keeps them steady along the way. This would look cute paired with everything from denim to corduroy overalls.PUMA is the global athletic brand that successfully fuses influences from sport, lifestyle and fashion. PUMA's unique industry perspective delivers the unexpected in sport-lifestyle footwear, apparel and accessories, through technical innovation and revolutionary design.",
      averageRating: "4.5",
      brand: "Puma",
      rating: {
        five: "73%",
        four: "14%",
        three: "6%",
        two: "3%",
        one: "5%",
      },
      price: 82.57,
      size: [6, 6.5, 7, 7.5],
      reviews: [
        {
          name: "Str8kuntry",
          review:
            "I bought these because she had tried on some others at the store. They were not this style but the same brand. I didn't like them because the sole was smaller than the shoes and it looked like a sprained ankle in the making if she started running. We sent them back. They fit the same at what you would wear.",
          rate: "4",
        },
        {
          name: "Tahirah",
          review:
            "I like classic sneakers. They can be paired with a dress easy. I wear 71/2.",
          rate: "4",
        },
        {
          name: "Mario",
          review:
            "Cómodas pero se rompen en la parte delantera emsima de los dedos la tela muy débil.",
          rate: "3",
        },
        {
          name: "Cole Sanjines",
          review: "Iconic brand with great quality!!",
          rate: "5",
        },
        {
          name: "officed",
          review:
            "Seems to be good quality. They are a bit stiff. My son , 10 just didn't like them. Returned",
          rate: "3",
        },
        {
          name: "keisha",
          review: "Very narrow shoe",
          rate: "4",
        },
        {
          name: "charmaine brown",
          review: "Good product",
          rate: "5",
        },
        {
          name: "Angelamaria80",
          review:
            "Bought these for my son a few months ago and they are still in great condition. The only problem I have with them is the lack of grip at the bottom. He tried wearing them for sporting events but he kept slipping on wet grass and the wet road. So now he wears them if he's not going to be engaged in any activities that involve running.",
          rate: "4",
        },
      ],
    },
    {
      name: "Under Armour Unisex-Child Pre School Assert 9 Alternate Closure Running Shoe",
      coverImg:
        "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_8%2Fshoe_8_main.png?alt=media&token=3f97ba85-5257-4acf-a1fe-68d57d067f0d",
      colors: ["blue", "black", "red"],
      imgs: [
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_A.png?alt=media&token=f851f64c-c346-4c17-9b67-1c5a02573a66",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_B.png?alt=media&token=cc09b746-7292-464e-b012-493df96ac6f8",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_C.png?alt=media&token=c2370e49-6573-4b4b-87d6-2c8dcae61cd4",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_A.png?alt=media&token=95f2ca35-81b9-4639-be9f-cb503f6c34e6",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_B.png?alt=media&token=4686e7e1-090f-4e34-9586-7f49bb1eb393",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_C.png?alt=media&token=15cd15af-7b0e-4785-8dab-14e2601f05ef",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_A.png?alt=media&token=5866ac58-9577-44bb-beae-840cff0fe26c",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_B.png?alt=media&token=725b8c29-1791-41b6-8b88-4592092dbd0a",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_C.png?alt=media&token=1a10a2c0-8cb2-42db-8a11-d890bc47ab5a",
        ],
      ],
      description:
        "Your ultimate lightweight, do-everything shoe—with soft cushioning for a smooth ride and synthetic overlays for more support.. Lightweight mesh upper with 3-color digital print delivers complete breathability. Durable leather overlays for stability & that locks in your midfoot. Hook & loop strap for easy on & off. EVA sockliner provides soft, step-in comfort. One-piece EVA midsole turns cushioned landings into explosive takeoffs. Lightweight, durable outsole. Lace type: Standard tie with hook & loop strap.",
      averageRating: "4.7",
      brand: "Under Armour",
      rating: {
        five: "82%",
        four: "10%",
        three: "4%",
        two: "1%",
        one: "3%",
      },
      price: 55.0,
      size: [
        6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14,
      ],
      reviews: [
        {
          name: "Jen Keller",
          review:
            "My son loves these shoes, but they're difficult for him to get on. I also have a hard time getting them on his feet compared to other shoes.",
          rate: "4",
        },
        {
          name: "Lauren G.",
          review:
            "I bought the all black ones for my 3 year old son. He's worn them to school since August, and they're still in great condition!! Definitely recommend the all black ones.",
          rate: "5",
        },
        {
          name: "Courtney",
          review:
            "I returned these the colors are beautiful they do run a tad bit small.",
          rate: "5",
        },
        {
          name: "Ashley",
          review: "Loved it!! Very confortable",
          rate: "5",
        },
        {
          name: "	JOHANNA RODRIGUEZ",
          review:
            "Excelente, el size le quedó perfectamente a mi niño y eso casi nunca lo logro en una primera compra, muy buena la calidad y comodidad. A mi hijo le encantan. Los recomiendo.",
          rate: "5",
        },
        {
          name: "MARIA ANTONIA GARCIA",
          review: "Perfect fit and good quality! Great for school",
          rate: "5",
        },
        {
          name: "Tiffany",
          review:
            "These shoes are awesome! They go with almost everything and very comfortable. I will purchase another size up when my daughter grows out of these.",
          rate: "5",
        },
      ],
    },
    {
      name: "adidas Men's Lite Racer Adapt 4.0  Shoe",
      coverImg:
        "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_9%2Fshoe_9_main.png?alt=media&token=bf71696e-8c5b-43a5-87ad-355e7c2fb5c5",
      colors: ["lightskyblue", "greenyellow", "orange"],
      imgs: [
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_A.png?alt=media&token=f851f64c-c346-4c17-9b67-1c5a02573a66",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_B.png?alt=media&token=cc09b746-7292-464e-b012-493df96ac6f8",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_red_C.png?alt=media&token=c2370e49-6573-4b4b-87d6-2c8dcae61cd4",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_A.png?alt=media&token=95f2ca35-81b9-4639-be9f-cb503f6c34e6",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_B.png?alt=media&token=4686e7e1-090f-4e34-9586-7f49bb1eb393",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_black_C.png?alt=media&token=15cd15af-7b0e-4785-8dab-14e2601f05ef",
        ],
        [
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_A.png?alt=media&token=5866ac58-9577-44bb-beae-840cff0fe26c",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_B.png?alt=media&token=725b8c29-1791-41b6-8b88-4592092dbd0a",
          "https://firebasestorage.googleapis.com/v0/b/the-retro-ef490.appspot.com/o/shoe_1%2Fshoe_1_navy_blue_C.png?alt=media&token=1a10a2c0-8cb2-42db-8a11-d890bc47ab5a",
        ],
      ],
      description:
        "These men's adidas running shoes make comfort the top priority. A stretchy upper gives them a sock-like feel, and the Cloudfoam midsole delivers pillow-soft comfort. The step-in design keeps things casual.",
      averageRating: "4.5",
      brand: "Adidas",
      rating: {
        five: "74%",
        four: "13%",
        three: "6%",
        two: "2%",
        one: "5%",
      },
      price: 199.0,
      size: [6, 6.5, 7, 7.5, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
      reviews: [
        {
          name: "Emm Jay",
          review:
            "Personally I prefer a tighter fitting shoe for working out or physical centric activity, and these shoes are not that. What they are - possibly the most comfortable shoe I have ever owned. I’m up to 4 pairs at this point and I really can’t begin to explain how much of a game changer these shoes are for me. The mesh fabric breathes like there isn’t anything there, super fast on/off & they are super easy to care for. For the price point, do yourself a favor and get 2 or 3 pairs right off the bat! You won’t be disappointed!Full Disclosure: I am and have been, for 20+ years, an Adidas Fanatic.",
          rate: "5",
        },
        {
          name: "TechRated",
          review:
            "I have had variations of this shoe in the past before and always loved the slip on feature and the memory padding foam for the support. This version of the Adidas Lite Racer Adapt 3.0 is a bit wider fit than the original show was. But it is not a downside at all. The wider space makes the walking a bit more padded and cloud stepping feel when walking.Quick Comments- If you want a shoe comfortable for long work hours on your feet this shoe is perfect for you.(The only reason this was not a 5/5 was because I wish the laces on the front were designed a bit differently, but that is just my personal opinion)",
          rate: "5",
        },
        {
          name: "Nate",
          review:
            "I was very skeptical of these shoes at first. Mainly when I learned that the laces were more for show than anything else. The shoe fits my foot perfect and does just what it says. It stays conformed to my foot and grabs my foot when running and relaxes it when standing. It is super comfortable and I highly recommend it. For those that are physically active, have to stand a lot or move around a lot daily, or workout heavily.",
          rate: "5",
        },
        {
          name: "cakizd",
          review:
            "I like how these fell and how easy they are to slide on. Unfortunately they wear out fast. If the bottom wears out then the shoe can be slippery in wet conditions. I almost fell a couple times. They’re on to the right idea with these shoes just need them to be a bit more durable. The price is too high for the short term use.",
          rate: "4",
        },
        {
          name: "Nate S.",
          review:
            "I ordered a pair of these in black last year in size 11 fit perfect and have absolutely loved them. This year I ordered a pair in 11 and they were way too tight. I returned and ordered a 12 and seems to be just as tight as the 11s were. The 12s which I still have seem to be loosening up a bit but are still alittle tight. Comfy but not sure if the sizing changed or my feet did (every other shoe I own is an 11)",
          rate: "5",
        },
        {
          name: "Revisor",
          review:
            "Never tried laceless shoes before and after playing around with these I've realized that I've been missing out my whole life. Just think about how many times do you actually lace your shoes out of millions times you put them on and take them off throughout the day, probably almost never, so whats the point? These ones look very stylish, very soft and comfortable, don't have an over-engineered outsole, therefore, easy to clean. Best thing about them is you can literally put them on without bending over and even touching the shoe with your hands, while at the same time still they are able to stay on firmly.",
          rate: "5",
        },
        {
          name: "Susan Woolard",
          review:
            "Just what I was hoping for, no laces (to tie), easy on, extremely comfortable. They’re like a cross between slippers and sneakers.",
          rate: "5",
        },
      ],
    },
  ];
  const initialFilter = {
    price: { max: "", min: "" },
    size: "All",
    color: "All",
    brand: "All",
  };
  const [position, setPosition] = useState({});
  const [shoes, setShoes] = useState(totalShoes);
  const [noshoe, setNoShoe] = useState("");
  const [filter, setFilter] = useState(initialFilter);
  const breakpointColumnsObj = {
    default: 3,
    1027: 2,
    756: 1,
  };

  // function
  const handleMinPrice = (e) => {
    setFilter({ ...filter, price: { ...filter.price, min: e.target.value } });
  };
  const handleMaxPrice = (e) => {
    setFilter({ ...filter, price: { ...filter.price, max: e.target.value } });
  };
  const handleSize = (size) => {
    setFilter({ ...filter, size });
  };
  const handleColorClick = (color) => {
    setFilter({ ...filter, color });
  };
  const handleBrandClick = (brand) => {
    setFilter({ ...filter, brand });
  };
  const handleFilterCLick = () => {
    console.log(filter);
    let arr = [];

    totalShoes.forEach((shoe) => {
      //checking for price
      if (
        filter.price.max == "" ||
        (shoe.price >= filter.price.min && shoe.price <= filter.price.max)
      ) {
        // Checking for brand
        if (filter.brand === "All" || filter.brand === shoe.brand) {
          // Checking for size
          if (filter.size === "All" || shoe.size.includes(filter.size)) {
            // Checking for Colors
            if (filter.color === "All" || shoe.colors.includes(filter.color)) {
              arr.push(shoe);
            }
          }
        }
      }
    });
    console.log(arr);
    setShoes(arr);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY >=
        document.querySelector(".all_products_filter").offsetTop
      ) {
        setPosition({ position: "fixed", top: 0 });
      } else if (
        window.scrollY <
        document.querySelector(".all_products_filter").offsetTop
      ) {
        setPosition({ position: "absolute", top: 0 });
      }
      if (
        window.scrollY >=
        document.querySelector(".all_products_filter").offsetTop +
          document.querySelector(".all_products_filter").offsetHeight -
          window.innerHeight
      ) {
        setPosition({ position: "absolute", bottom: 0 });
      }
    });
  }, []);
  return (
    <div className="all_products_main">
      <div className="all_products_main_child">
        <div className="all_products_filter">
          <div
            className="all_products_filter_child"
            style={{ ...position, height: "100vh" }}
          >
            <div className="all_products_filter_heading">
              <h2>Filters</h2>
              <div className="all_products_filter_heading_image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </div>
            </div>
            <div className="all_products_filter_price all_products_filter_section">
              <h3>Price</h3>
              <div className="all_products_filter_price_range">
                <input
                  type="number"
                  placeholder="Min"
                  value={filter.price.min}
                  onChange={(e) => handleMinPrice(e)}
                  name=""
                  id=""
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filter.price.max}
                  onChange={(e) => handleMaxPrice(e)}
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="all_products_filter_sizes all_products_filter_section">
              <h3>Size</h3>
              <div className="all_products_filter_size_range">
                {filterObj.sizes.map((size, index) => (
                  <div
                    className="dis_con size"
                    key={index}
                    onClick={() => handleSize(size)}
                    style={{
                      textDecoration:
                        size === filter.size ? "underline" : "none",
                    }}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="all_products_filter_colors all_products_filter_section">
              <h3>Colors</h3>
              <div className="all_products_filter_color_range">
                {filterObj.colors.map((color, index) => (
                  <div
                    className="dis_con color"
                    key={index}
                    onClick={() => handleColorClick(color)}
                    style={{
                      background: color === "All" ? "none" : color,
                      border:
                        filter.color === color ? "2px solid gray" : "none",
                    }}
                  >
                    {color === "All" && "All"}
                  </div>
                ))}
              </div>
            </div>
            <div className="all_products_filter_brands all_products_filter_section">
              <h3>Brands</h3>
              <div className="all_products_filter_brand_range">
                {filterObj.brands.map((brand, index) => (
                  <div
                    className="brand"
                    key={index}
                    style={{
                      textDecoration:
                        brand === filter.brand ? "underline" : "none",
                    }}
                    onClick={() => handleBrandClick(brand)}
                  >
                    <p>{brand}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="primary-button"
              disabled={initialFilter === filter}
              onClick={handleFilterCLick}
            >
              Apply Filter
            </button>
          </div>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {shoes.length !== 0 ? (
            shoes.map((shoe, index) => {
              if (true) {
                return (
                  <div>
                    <Link
                      style={{ color: "white", textDecoration: "none" }}
                      to="/product"
                      onClick={() => handleClick(shoe)}
                    >
                      <div className="all_products_product_main" key={index}>
                        <img src={shoe.coverImg} alt="" />
                        <div className="all_products_product_info">
                          <h2>{shoe.name}</h2>
                          <h4>{shoe.brand}</h4>
                          <h4>⭐⭐⭐⭐⭐ {shoe.averageRating}</h4>
                          <span>${shoe.price.toString()}</span>
                          <span className="all_products_product_shipping">
                            <h4>shipping</h4>
                            <span>${Math.floor(shoe.price * 0.1)}</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <h3>Sorry, no shoe found</h3>
          )}
        </Masonry>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  product: state.ProductState,
});
const dispatchStateToProps = (dispatch) => ({
  setProduct: (payload) => dispatch(setProductAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(AllProducts);
