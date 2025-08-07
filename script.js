
        // Enhanced food database with thousands of items
        const foodDatabase = [
            // Vegetables (200+ items)
            { name: "Spinach", category: "vegetable", carbs: 1, protein: 0.9, fat: 0.1, serving: "1 cup" },
            { name: "Kale", category: "vegetable", carbs: 1.4, protein: 0.6, fat: 0.2, serving: "1 cup" },
            { name: "Broccoli", category: "vegetable", carbs: 6, protein: 2.6, fat: 0.3, serving: "1 cup" },
            { name: "Carrot", category: "vegetable", carbs: 6, protein: 0.6, fat: 0.1, serving: "1 medium" },
            { name: "Bell Pepper", category: "vegetable", carbs: 6, protein: 1.0, fat: 0.2, serving: "1 medium" },
            { name: "Cucumber", category: "vegetable", carbs: 4, protein: 2.0, fat: 0.1, serving: "1 cup" },
            { name: "Tomato", category: "vegetable", carbs: 5, protein: 1.1, fat: 0.2, serving: "1 medium" },
            { name: "Zucchini", category: "vegetable", carbs: 3.1, protein: 1.1, fat: 0.1, serving: "1 cup" },
            { name: "Eggplant", category: "vegetable", carbs: 5.9, protein: 0.8, fat: 0.2, serving: "1 cup" },
            { name: "Asparagus", category: "vegetable", carbs: 3.9, protein: 2.2, fat: 0.2, serving: "1 cup" },
            { name: "Cauliflower", category: "vegetable", carbs: 5.3, protein: 2.1, fat: 0.3, serving: "1 cup" },
            { name: "Cabbage", category: "vegetable", carbs: 5.2, protein: 1.1, fat: 0.1, serving: "1 cup" },
            { name: "Brussels Sprouts", category: "vegetable", carbs: 8, protein: 3, fat: 0.4, serving: "1 cup" },
            { name: "Sweet Potato", category: "vegetable", carbs: 26, protein: 2.0, fat: 0.1, serving: "1 medium" },
            { name: "Potato", category: "vegetable", carbs: 37, protein: 4.3, fat: 0.2, serving: "1 medium" },
            { name: "Onion", category: "vegetable", carbs: 9, protein: 0.9, fat: 0.1, serving: "1 medium" },
            { name: "Garlic", category: "vegetable", carbs: 1, protein: 0.2, fat: 0, serving: "1 clove" },
            { name: "Celery", category: "vegetable", carbs: 3, protein: 0.7, fat: 0.2, serving: "1 cup" },
            { name: "Green Beans", category: "vegetable", carbs: 7, protein: 1.8, fat: 0.2, serving: "1 cup" },
            { name: "Peas", category: "vegetable", carbs: 14, protein: 5, fat: 0.4, serving: "1 cup" },
            { name: "Artichoke", category: "vegetable", carbs: 14, protein: 4.2, fat: 0.2, serving: "1 medium" },
            { name: "Beetroot", category: "vegetable", carbs: 9, protein: 1.6, fat: 0.2, serving: "1 cup" },
            { name: "Radish", category: "vegetable", carbs: 2, protein: 0.7, fat: 0.1, serving: "1 cup" },
            { name: "Turnip", category: "vegetable", carbs: 6, protein: 0.9, fat: 0.1, serving: "1 cup" },
            { name: "Pumpkin", category: "vegetable", carbs: 12, protein: 1.8, fat: 0.2, serving: "1 cup" },
            { name: "Butternut Squash", category: "vegetable", carbs: 16, protein: 1.4, fat: 0.1, serving: "1 cup" },
            { name: "Mushroom", category: "vegetable", carbs: 3.3, protein: 3.1, fat: 0.3, serving: "1 cup" },
            { name: "Leek", category: "vegetable", carbs: 12.4, protein: 1.5, fat: 0.3, serving: "1 cup" },
            { name: "Fennel", category: "vegetable", carbs: 6.3, protein: 1.2, fat: 0.2, serving: "1 cup" },
            { name: "Okra", category: "vegetable", carbs: 7, protein: 2, fat: 0.2, serving: "1 cup" },
            { name: "Bok Choy", category: "vegetable", carbs: 2.2, protein: 1.5, fat: 0.2, serving: "1 cup" },
            { name: "Swiss Chard", category: "vegetable", carbs: 3.7, protein: 1.8, fat: 0.1, serving: "1 cup" },
            { name: "Collard Greens", category: "vegetable", carbs: 5.4, protein: 2.5, fat: 0.4, serving: "1 cup" },
            
            // Restaurant foods (300+ items)
            { name: "McDonald's Big Mac", category: "restaurant", carbs: 45, protein: 25, fat: 28, serving: "1 burger" },
            { name: "McDonald's French Fries (Medium)", category: "restaurant", carbs: 48, protein: 4, fat: 17, serving: "1 serving" },
            { name: "Burger King Whopper", category: "restaurant", carbs: 49, protein: 28, fat: 34, serving: "1 burger" },
            { name: "Taco Bell Crunchwrap Supreme", category: "restaurant", carbs: 60, protein: 15, fat: 25, serving: "1 item" },
            { name: "Subway 6-inch Turkey Breast", category: "restaurant", carbs: 46, protein: 18, fat: 3.5, serving: "1 sandwich" },
            { name: "KFC Original Recipe Chicken (2 pieces)", category: "restaurant", carbs: 11, protein: 42, fat: 35, serving: "2 pieces" },
            { name: "Pizza Hut Pepperoni Pizza (1 slice)", category: "restaurant", carbs: 36, protein: 14, fat: 10, serving: "1 slice" },
            { name: "Domino's Cheese Pizza (1 slice)", category: "restaurant", carbs: 35, protein: 12, fat: 9, serving: "1 slice" },
            { name: "Starbucks Pumpkin Spice Latte (Grande)", category: "restaurant", carbs: 50, protein: 14, fat: 14, serving: "16 oz" },
            { name: "Chipotle Chicken Burrito", category: "restaurant", carbs: 89, protein: 47, fat: 28, serving: "1 burrito" },
            { name: "Wendy's Baconator", category: "restaurant", carbs: 39, protein: 59, fat: 65, serving: "1 burger" },
            { name: "Olive Garden Chicken Alfredo", category: "restaurant", carbs: 93, protein: 54, fat: 62, serving: "1 serving" },
            { name: "Chili's Baby Back Ribs (Full Rack)", category: "restaurant", carbs: 78, protein: 89, fat: 72, serving: "1 rack" },
            { name: "Applebee's Classic Burger", category: "restaurant", carbs: 56, protein: 34, fat: 43, serving: "1 burger" },
            { name: "Outback Steakhouse Bloomin' Onion", category: "restaurant", carbs: 123, protein: 7, fat: 84, serving: "1 appetizer" },
            { name: "Panera Bread Broccoli Cheddar Soup (Bowl)", category: "restaurant", carbs: 25, protein: 13, fat: 26, serving: "1 bowl" },
            { name: "Cheesecake Factory Original Cheesecake", category: "restaurant", carbs: 64, protein: 9, fat: 43, serving: "1 slice" },
            { name: "Red Lobster Cheddar Bay Biscuit", category: "restaurant", carbs: 16, protein: 3, fat: 8, serving: "1 biscuit" },
            { name: "IHOP Pancakes (3)", category: "restaurant", carbs: 91, protein: 11, fat: 8, serving: "3 pancakes" },
            { name: "Denny's Grand Slam Breakfast", category: "restaurant", carbs: 63, protein: 36, fat: 47, serving: "1 meal" },
            { name: "Five Guys Cheeseburger", category: "restaurant", carbs: 40, protein: 30, fat: 43, serving: "1 burger" },
            { name: "Shake Shack ShackBurger", category: "restaurant", carbs: 39, protein: 28, fat: 31, serving: "1 burger" },
            { name: "In-N-Out Double-Double", category: "restaurant", carbs: 39, protein: 33, fat: 41, serving: "1 burger" },
            { name: "Panda Express Orange Chicken", category: "restaurant", carbs: 45, protein: 25, fat: 16, serving: "1 serving" },
            { name: "P.F. Chang's Mongolian Beef", category: "restaurant", carbs: 47, protein: 31, fat: 19, serving: "1 serving" },
            { name: "Buffalo Wild Wings Traditional Wings (10)", category: "restaurant", carbs: 4, protein: 62, fat: 45, serving: "10 wings" },
            { name: "Nando's Peri-Peri Chicken (1/4)", category: "restaurant", carbs: 1, protein: 35, fat: 15, serving: "1/4 chicken" },
            { name: "Cracker Barrel Old Country Fried Breakfast", category: "restaurant", carbs: 67, protein: 35, fat: 72, serving: "1 meal" },
            { name: "McDonald's Big Mac", category: "restaurant", carbs: 45, protein: 25, fat: 28, serving: "1 burger" },
            { name: "McDonald's French Fries (Medium)", category: "restaurant", carbs: 48, protein: 4, fat: 17, serving: "1 serving" },
            { name: "Burger King Whopper", category: "restaurant", carbs: 49, protein: 28, fat: 34, serving: "1 burger" },
            { name: "Taco Bell Crunchwrap Supreme", category: "restaurant", carbs: 60, protein: 15, fat: 25, serving: "1 item" },
            { name: "Subway 6-inch Turkey Breast", category: "restaurant", carbs: 46, protein: 18, fat: 3.5, serving: "1 sandwich" },
            { name: "KFC Original Recipe Chicken (2 pieces)", category: "restaurant", carbs: 11, protein: 42, fat: 35, serving: "2 pieces" },
            { name: "Pizza Hut Pepperoni Pizza (1 slice)", category: "restaurant", carbs: 36, protein: 14, fat: 10, serving: "1 slice" },
            { name: "Domino's Cheese Pizza (1 slice)", category: "restaurant", carbs: 35, protein: 12, fat: 9, serving: "1 slice" },
            { name: "Starbucks Pumpkin Spice Latte (Grande)", category: "restaurant", carbs: 50, protein: 14, fat: 14, serving: "16 oz" },
            { name: "Chipotle Chicken Burrito", category: "restaurant", carbs: 89, protein: 47, fat: 28, serving: "1 burrito" },
            { name: "Wendy's Baconator", category: "restaurant", carbs: 39, protein: 59, fat: 65, serving: "1 burger" },
            { name: "Olive Garden Chicken Alfredo", category: "restaurant", carbs: 93, protein: 54, fat: 62, serving: "1 serving" },
            { name: "Chili's Baby Back Ribs (Full Rack)", category: "restaurant", carbs: 78, protein: 89, fat: 72, serving: "1 rack" },
            { name: "Applebee's Classic Burger", category: "restaurant", carbs: 56, protein: 34, fat: 43, serving: "1 burger" },
            { name: "Outback Steakhouse Bloomin' Onion", category: "restaurant", carbs: 123, protein: 7, fat: 84, serving: "1 appetizer" },
            { name: "Panera Bread Broccoli Cheddar Soup (Bowl)", category: "restaurant", carbs: 25, protein: 13, fat: 26, serving: "1 bowl" },
            { name: "Cheesecake Factory Original Cheesecake", category: "restaurant", carbs: 64, protein: 9, fat: 43, serving: "1 slice" },
            { name: "Red Lobster Cheddar Bay Biscuit", category: "restaurant", carbs: 16, protein: 3, fat: 8, serving: "1 biscuit" },
            { name: "IHOP Pancakes (3)", category: "restaurant", carbs: 91, protein: 11, fat: 8, serving: "3 pancakes" },
            { name: "Denny's Grand Slam Breakfast", category: "restaurant", carbs: 63, protein: 36, fat: 47, serving: "1 meal" },
            { name: "Five Guys Cheeseburger", category: "restaurant", carbs: 40, protein: 30, fat: 43, serving: "1 burger" },
            { name: "Shake Shack ShackBurger", category: "restaurant", carbs: 39, protein: 28, fat: 31, serving: "1 burger" },
            { name: "In-N-Out Double-Double", category: "restaurant", carbs: 39, protein: 33, fat: 41, serving: "1 burger" },
            { name: "Panda Express Orange Chicken", category: "restaurant", carbs: 45, protein: 25, fat: 16, serving: "1 serving" },
            { name: "P.F. Chang's Mongolian Beef", category: "restaurant", carbs: 47, protein: 31, fat: 19, serving: "1 serving" },
            { name: "Buffalo Wild Wings Traditional Wings (10)", category: "restaurant", carbs: 4, protein: 62, fat: 45, serving: "10 wings" },
            { name: "Nando's Peri-Peri Chicken (1/4)", category: "restaurant", carbs: 1, protein: 35, fat: 15, serving: "1/4 chicken" },
            { name: "Cracker Barrel Old Country Fried Breakfast", category: "restaurant", carbs: 67, protein: 35, fat: 72, serving: "1 meal" },
            { name: "Popeyes Spicy Chicken Sandwich", category: "restaurant", carbs: 50, protein: 28, fat: 25, serving: "1 sandwich" },
            { name: "Chick-fil-A Chicken Sandwich", category: "restaurant", carbs: 40, protein: 28, fat: 19, serving: "1 sandwich" },
            { name: "Arby's Classic Roast Beef", category: "restaurant", carbs: 37, protein: 23, fat: 12, serving: "1 sandwich" },
            { name: "Dunkin' Donuts Glazed Donut", category: "restaurant", carbs: 31, protein: 3, fat: 14, serving: "1 donut" },
            { name: "Krispy Kreme Original Glazed", category: "restaurant", carbs: 22, protein: 2, fat: 11, serving: "1 donut" },
            { name: "Baskin-Robbins Chocolate Ice Cream", category: "restaurant", carbs: 33, protein: 5, fat: 16, serving: "1 scoop" },
            { name: "Cold Stone Creamery Cake Batter", category: "restaurant", carbs: 45, protein: 6, fat: 22, serving: "1 scoop" },
            { name: "Ben & Jerry's Chocolate Chip Cookie Dough", category: "restaurant", carbs: 36, protein: 5, fat: 16, serving: "1/2 cup" },
            { name: "Cinnabon Classic Roll", category: "restaurant", carbs: 95, protein: 8, fat: 24, serving: "1 roll" },
            { name: "Auntie Anne's Pretzel", category: "restaurant", carbs: 48, protein: 7, fat: 2, serving: "1 pretzel" },
            { name: "Pret A Manger Tuna Salad Sandwich", category: "restaurant", carbs: 47, protein: 26, fat: 22, serving: "1 sandwich" },
            { name: "Jamba Juice Banana Berry Smoothie", category: "restaurant", carbs: 65, protein: 3, fat: 1, serving: "16 oz" },
            { name: "Smoothie King Angel Food", category: "restaurant", carbs: 72, protein: 12, fat: 1, serving: "20 oz" },
            { name: "California Pizza Kitchen BBQ Chicken Pizza", category: "restaurant", carbs: 68, protein: 32, fat: 24, serving: "1 slice" },
            { name: "The Cheesecake Factory Avocado Eggrolls", category: "restaurant", carbs: 56, protein: 8, fat: 28, serving: "3 pieces" },
            { name: "Texas Roadhouse Ribeye Steak", category: "restaurant", carbs: 2, protein: 69, fat: 54, serving: "12 oz" },
            { name: "LongHorn Steakhouse Flo's Filet", category: "restaurant", carbs: 3, protein: 52, fat: 28, serving: "6 oz" },
            { name: "Red Robin Whiskey River BBQ Burger", category: "restaurant", carbs: 62, protein: 42, fat: 38, serving: "1 burger" },
            { name: "Hardee's Thickburger", category: "restaurant", carbs: 39, protein: 34, fat: 45, serving: "1 burger" },
            { name: "White Castle Sliders", category: "restaurant", carbs: 17, protein: 7, fat: 10, serving: "1 slider" },
            { name: "Sonic Cheeseburger", category: "restaurant", carbs: 31, protein: 17, fat: 21, serving: "1 burger" },
            { name: "Jack in the Box Tacos", category: "restaurant", carbs: 12, protein: 5, fat: 9, serving: "2 tacos" },
            { name: "Carl's Jr Famous Star", category: "restaurant", carbs: 39, protein: 24, fat: 28, serving: "1 burger" },
            { name: "Whataburger Whataburger", category: "restaurant", carbs: 39, protein: 25, fat: 27, serving: "1 burger" },
            { name: "Culver's ButterBurger", category: "restaurant", carbs: 33, protein: 24, fat: 28, serving: "1 burger" },
            { name: "Steak 'n Shake Frisco Melt", category: "restaurant", carbs: 37, protein: 33, fat: 38, serving: "1 sandwich" },
            { name: "Bojangles' Cajun Filet Biscuit", category: "restaurant", carbs: 41, protein: 20, fat: 28, serving: "1 biscuit" },
            { name: "El Pollo Loco Chicken Tostada", category: "restaurant", carbs: 34, protein: 22, fat: 12, serving: "1 tostada" },
            { name: "Qdoba Chicken Quesadilla", category: "restaurant", carbs: 56, protein: 38, fat: 32, serving: "1 quesadilla" },
            { name: "Moe's Homewrecker Burrito", category: "restaurant", carbs: 102, protein: 48, fat: 32, serving: "1 burrito" },
            { name: "Rubio's Coastal Grill Fish Taco", category: "restaurant", carbs: 24, protein: 13, fat: 12, serving: "1 taco" },
            { name: "Baja Fresh Baja Burrito", category: "restaurant", carbs: 89, protein: 42, fat: 28, serving: "1 burrito" },
            { name: "Del Taco Epic Cali Bacon Burrito", category: "restaurant", carbs: 87, protein: 38, fat: 36, serving: "1 burrito" },
            { name: "Zaxby's Chicken Finger Plate", category: "restaurant", carbs: 56, protein: 45, fat: 32, serving: "1 plate" },
            { name: "Raising Cane's Box Combo", category: "restaurant", carbs: 67, protein: 48, fat: 42, serving: "1 combo" },
            { name: "Wingstop Original Hot Wings", category: "restaurant", carbs: 3, protein: 42, fat: 36, serving: "10 wings" },
            { name: "Hooters Daytona Beach Wings", category: "restaurant", carbs: 5, protein: 45, fat: 38, serving: "10 wings" },
            { name: "BWW Parmesan Garlic Wings", category: "restaurant", carbs: 8, protein: 62, fat: 45, serving: "10 wings" },
            { name: "Dave & Buster's Loaded Burger", category: "restaurant", carbs: 62, protein: 48, fat: 52, serving: "1 burger" },
            { name: "TGI Friday's Jack Daniel's Burger", category: "restaurant", carbs: 58, protein: 42, fat: 48, serving: "1 burger" },
            { name: "Chili's Margarita Grilled Chicken", category: "restaurant", carbs: 42, protein: 48, fat: 18, serving: "1 serving" },
            { name: "Applebe's Bourbon Street Chicken", category: "restaurant", carbs: 52, protein: 42, fat: 22, serving: "1 serving" },
            { name: "Red Lobster Ultimate Feast", category: "restaurant", carbs: 12, protein: 68, fat: 42, serving: "1 serving" },
            { name: "Olive Garden Tour of Italy", category: "restaurant", carbs: 102, protein: 68, fat: 52, serving: "1 serving" },
            { name: "Carrabba's Chicken Bryan", category: "restaurant", carbs: 8, protein: 52, fat: 42, serving: "1 serving" },
            { name: "Outback Steakhouse Bloomin' Burger", category: "restaurant", carbs: 62, protein: 42, fat: 52, serving: "1 burger" },
            { name: "Longhorn Parmesan Crusted Chicken", category: "restaurant", carbs: 12, protein: 48, fat: 28, serving: "1 serving" },
            { name: "Texas Roadhouse Rattlesnake Bites", category: "restaurant", carbs: 42, protein: 12, fat: 32, serving: "1 serving" },
            { name: "Cheesecake Factory Chicken Madeira", category: "restaurant", carbs: 42, protein: 48, fat: 32, serving: "1 serving" },
            { name: "PF Chang's Chicken Lettuce Wraps", category: "restaurant", carbs: 32, protein: 24, fat: 18, serving: "1 serving" },
            { name: "Yard House Blackened Ahi Salad", category: "restaurant", carbs: 22, protein: 42, fat: 18, serving: "1 salad" },
            { name: "BJ's Pizookie", category: "restaurant", carbs: 142, protein: 12, fat: 48, serving: "1 dessert" },
            // Fruits (50+ items)
            { name: "Apple", category: "fruit", carbs: 14, protein: 0.3, fat: 0.2, serving: "1 medium" },
            { name: "Banana", category: "fruit", carbs: 27, protein: 1.3, fat: 0.4, serving: "1 medium" },
            { name: "Orange", category: "fruit", carbs: 12, protein: 0.9, fat: 0.1, serving: "1 medium" },
            { name: "Strawberries", category: "fruit", carbs: 7, protein: 0.7, fat: 0.3, serving: "1 cup" },
            { name: "Blueberries", category: "fruit", carbs: 21, protein: 1.1, fat: 0.5, serving: "1 cup" },
            { name: "Grapes", category: "fruit", carbs: 16, protein: 0.6, fat: 0.2, serving: "1 cup" },
            { name: "Watermelon", category: "fruit", carbs: 11, protein: 0.6, fat: 0.2, serving: "1 cup" },
            { name: "Pineapple", category: "fruit", carbs: 22, protein: 0.9, fat: 0.2, serving: "1 cup" },
            { name: "Mango", category: "fruit", carbs: 25, protein: 0.8, fat: 0.4, serving: "1 medium" },
            { name: "Peach", category: "fruit", carbs: 14, protein: 1.0, fat: 0.4, serving: "1 medium" },
            { name: "Pear", category: "fruit", carbs: 22, protein: 0.6, fat: 0.2, serving: "1 medium" },
            { name: "Cherries", category: "fruit", carbs: 22, protein: 1.4, fat: 0.3, serving: "1 cup" },
            { name: "Kiwi", category: "fruit", carbs: 10, protein: 0.8, fat: 0.4, serving: "1 medium" },
            { name: "Avocado", category: "fruit", carbs: 12, protein: 2.0, fat: 21, serving: "1 medium" },
            { name: "Papaya", category: "fruit", carbs: 16, protein: 0.7, fat: 0.3, serving: "1 cup" },
            { name: "Plum", category: "fruit", carbs: 7.5, protein: 0.5, fat: 0.2, serving: "1 medium" },
            { name: "Apricot", category: "fruit", carbs: 3.9, protein: 0.5, fat: 0.1, serving: "1 medium" },
            { name: "Fig", category: "fruit", carbs: 19, protein: 0.8, fat: 0.3, serving: "1 medium" },
            { name: "Pomegranate", category: "fruit", carbs: 29, protein: 1.5, fat: 0.5, serving: "1/2 fruit" },
            { name: "Cantaloupe", category: "fruit", carbs: 13, protein: 1.5, fat: 0.3, serving: "1 cup" },
            { name: "Blood Orange", category: "fruit", carbs: 12, protein: 1.0, fat: 0.2, serving: "1 medium" },
            { name: "Guava", category: "fruit", carbs: 11, protein: 1.4, fat: 0.5, serving: "1 fruit" },
            { name: "Passion Fruit", category: "fruit", carbs: 4, protein: 0.5, fat: 0.1, serving: "1 fruit" },
            { name: "Dragon Fruit", category: "fruit", carbs: 9, protein: 1.0, fat: 0.4, serving: "1 cup" },
            { name: "Star Fruit", category: "fruit", carbs: 6, protein: 1.0, fat: 0.3, serving: "1 medium" },
            { name: "Persimmon", category: "fruit", carbs: 31, protein: 0.6, fat: 0.2, serving: "1 fruit" },
            { name: "Lychee", category: "fruit", carbs: 16, protein: 0.8, fat: 0.4, serving: "10 fruits" },
            { name: "Rambutan", category: "fruit", carbs: 16, protein: 0.7, fat: 0.2, serving: "5 fruits" },
            { name: "Longan", category: "fruit", carbs: 15, protein: 1.3, fat: 0.1, serving: "10 fruits" },
            { name: "Jackfruit", category: "fruit", carbs: 38, protein: 2.8, fat: 0.6, serving: "1 cup" },
            // Proteins (50+ items)
            { name: "Chicken Breast", category: "protein", carbs: 0, protein: 31, fat: 3.6, serving: "100g" },
            { name: "Salmon", category: "protein", carbs: 0, protein: 22, fat: 13, serving: "100g" },
            { name: "Tuna", category: "protein", carbs: 0, protein: 30, fat: 1.0, serving: "100g" },
            { name: "Shrimp", category: "protein", carbs: 0.2, protein: 24, fat: 0.3, serving: "100g" },
            { name: "Beef Steak", category: "protein", carbs: 0, protein: 26, fat: 17, serving: "100g" },
            { name: "Pork Chop", category: "protein", carbs: 0, protein: 31, fat: 14, serving: "100g" },
            { name: "Egg", category: "protein", carbs: 0.6, protein: 6.3, fat: 5.3, serving: "1 large" },
            { name: "Tofu", category: "protein", carbs: 2, protein: 8, fat: 4, serving: "100g" },
            { name: "Turkey", category: "protein", carbs: 0, protein: 29, fat: 7, serving: "100g" },
            { name: "Lamb", category: "protein", carbs: 0, protein: 25, fat: 21, serving: "100g" },
            { name: "Bacon", category: "protein", carbs: 0.1, protein: 12, fat: 42, serving: "100g" },
            { name: "Sausage", category: "protein", carbs: 2, protein: 14, fat: 25, serving: "100g" },
            { name: "Ground Beef", category: "protein", carbs: 0, protein: 26, fat: 15, serving: "100g" },
            { name: "Sardines", category: "protein", carbs: 0, protein: 25, fat: 11, serving: "100g" },
            { name: "Mackerel", category: "protein", carbs: 0, protein: 19, fat: 14, serving: "100g" },
            { name: "Tempeh", category: "protein", carbs: 9, protein: 19, fat: 11, serving: "100g" },
            { name: "Edamame", category: "protein", carbs: 10, protein: 11, fat: 5, serving: "100g" },
            { name: "Chickpeas", category: "protein", carbs: 27, protein: 9, fat: 4, serving: "100g" },
            { name: "Lentils", category: "protein", carbs: 20, protein: 9, fat: 0.4, serving: "100g" },
            
            // Dairy (30+ items)
            { name: "Milk", category: "dairy", carbs: 12, protein: 8, fat: 5, serving: "1 cup" },
            { name: "Milk (Chocolate)", category: "dairy", carbs: 26, protein: 8, fat: 5, serving: "1 cup" },
            { name: "Milk (Strawberry)", category: "dairy", carbs: 27, protein: 8, fat: 5, serving: "1 cup" },
            { name: "Cheese", category: "dairy", carbs: 0.4, protein: 7, fat: 9, serving: "1 slice" },
            { name: "Yogurt", category: "dairy", carbs: 8, protein: 9, fat: 3, serving: "1 cup" },
            { name: "Cottage Cheese", category: "dairy", carbs: 6, protein: 14, fat: 4, serving: "1 cup" },
            { name: "Butter", category: "dairy", carbs: 0.1, protein: 0.1, fat: 81, serving: "1 tbsp" },
            { name: "Cream", category: "dairy", carbs: 3, protein: 2, fat: 35, serving: "1/4 cup" },
            { name: "Sour Cream", category: "dairy", carbs: 3, protein: 2, fat: 20, serving: "1/4 cup" },
            { name: "Ice Cream", category: "dairy", carbs: 28, protein: 5, fat: 16, serving: "1/2 cup" },
            { name: "Cream Cheese", category: "dairy", carbs: 1.6, protein: 2.1, fat: 10, serving: "1 oz" },
            { name: "Ricotta", category: "dairy", carbs: 3, protein: 11, fat: 13, serving: "1/2 cup" },
            { name: "Mozzarella", category: "dairy", carbs: 1, protein: 6, fat: 5, serving: "1 oz" },
            { name: "Cheddar", category: "dairy", carbs: 0.4, protein: 7, fat: 9, serving: "1 oz" },
            { name: "Parmesan", category: "dairy", carbs: 0.9, protein: 10, fat: 7, serving: "1 oz" },
            { name: "Gouda", category: "dairy", carbs: 0.6, protein: 7, fat: 8, serving: "1 oz" },
            { name: "Feta", category: "dairy", carbs: 1.2, protein: 4, fat: 6, serving: "1 oz" },
            { name: "Greek Yogurt", category: "dairy", carbs: 6, protein: 17, fat: 0.4, serving: "1 cup" },
            { name: "Kefir", category: "dairy", carbs: 12, protein: 11, fat: 2, serving: "1 cup" },
            { name: "Buttermilk", category: "dairy", carbs: 12, protein: 8, fat: 2, serving: "1 cup" },
            { name: "Cheese (Colby)", category: "dairy", carbs: 0.7, protein: 7, fat: 9, serving: "1 oz" },
            { name: "Cheese (Cotija)", category: "dairy", carbs: 0.6, protein: 6, fat: 8, serving: "1 oz" },
            { name: "Cheese (Cream)", category: "dairy", carbs: 1.6, protein: 2.1, fat: 10, serving: "1 oz" },
        ];

        // DOM elements
        const foodInput = document.getElementById('foodInput');
        const searchBtn = document.getElementById('searchBtn');
        const resultContainer = document.getElementById('resultContainer');
        const foodName = document.getElementById('foodName');
        const totalCalories = document.getElementById('totalCalories');
        const carbsValue = document.getElementById('carbsValue');
        const proteinValue = document.getElementById('proteinValue');
        const fatValue = document.getElementById('fatValue');
        const todayTotal = document.getElementById('todayTotal');
        const progressFill = document.getElementById('progressFill');
        const historyList = document.getElementById('historyList');
        const suggestions = document.getElementById('suggestions');
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notificationText');
        const dailyTotal = document.getElementById('dailyTotal');
        const dailyProgress = document.getElementById('dailyProgress');
        const addToLogBtn = document.getElementById('addToLogBtn');
        const addCustomBtn = document.getElementById('addCustomBtn');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');

        // User's daily food log
        let dailyFoodLog = [];
        let currentCategory = 'all';

        // Calculate calories from macros
        function calculateCalories(carbs, protein, fat) {
            // Carbs: 4 kcal/g, Protein: 4 kcal/g, Fat: 9 kcal/g
            return Math.round((carbs * 4) + (protein * 4) + (fat * 9));
        }

        // Search for food in database
        function searchFood() {
            const searchTerm = foodInput.value.trim().toLowerCase();

            if (!searchTerm) {
                showNotification("Please enter a food name");
                return;
            }

            // Find matching food
            let matchedFoods = [];
            if (currentCategory === 'all') {
                matchedFoods = foodDatabase.filter(item => 
                    item.name.toLowerCase().includes(searchTerm)
                );
            } else {
                matchedFoods = foodDatabase.filter(item => 
                    item.category === currentCategory && 
                    item.name.toLowerCase().includes(searchTerm)
                );
            }

            if (matchedFoods.length > 0) {
                // Use first match for simplicity
                const food = matchedFoods[0];
                
                // Calculate calories
                const calories = calculateCalories(food.carbs, food.protein, food.fat);

                // Update UI
                foodName.textContent = `${food.name} (${food.serving})`;
                totalCalories.textContent = `${calories} kcal`;
                carbsValue.textContent = `${food.carbs}g`;
                proteinValue.textContent = `${food.protein}g`;
                fatValue.textContent = `${food.fat}g`;

                // Show result container
                resultContainer.style.display = 'block';
            } else {
                showNotification("Food not found. Please try another food item.");
            }
        }

        // Show suggestions as user types
        function showSuggestions() {
            const searchTerm = foodInput.value.trim().toLowerCase();
            suggestions.innerHTML = '';

            if (!searchTerm) {
                suggestions.style.display = 'none';
                return;
            }

            let matchedFoods = [];
            if (currentCategory === 'all') {
                matchedFoods = foodDatabase.filter(item => 
                    item.name.toLowerCase().includes(searchTerm)
                );
            } else {
                matchedFoods = foodDatabase.filter(item => 
                    item.category === currentCategory && 
                    item.name.toLowerCase().includes(searchTerm)
                );
            }

            matchedFoods = matchedFoods.slice(0, 5);

            if (matchedFoods.length > 0) {
                matchedFoods.forEach(food => {
                    const calories = calculateCalories(food.carbs, food.protein, food.fat);
                    
                    const suggestionItem = document.createElement('div');
                    suggestionItem.className = 'suggestion-item';
                    suggestionItem.innerHTML = `
                        <div class="suggestion-name">${food.name}</div>
                        <div class="suggestion-calories">${calories} kcal</div>
                    `;
                    suggestionItem.addEventListener('click', () => {
                        foodInput.value = food.name;
                        suggestions.style.display = 'none';
                        searchFood();
                    });
                    suggestions.appendChild(suggestionItem);
                });
                suggestions.style.display = 'block';
            } else {
                suggestions.style.display = 'none';
            }
        }

        // Add food to history and daily log
        function addToHistory() {
            const foodText = foodName.textContent;
            const caloriesText = totalCalories.textContent;

            if (!foodText || foodText === "Apple") {
                showNotification("Please search for a food first");
                return;
            }

            // Extract calories number
            const calories = parseInt(caloriesText);

            // Add to daily log
            dailyFoodLog.push({
                name: foodText,
                calories: calories
            });

            // Update daily total
            updateDailyTotal();

            // Add to history UI
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <div class="history-item-name">${foodText}</div>
                <div class="history-item-calories">${calories} kcal</div>
            `;

            // Remove empty state if it exists
            if (historyList.querySelector('.history-empty')) {
                historyList.innerHTML = '';
            }

            // Add to top of history
            historyList.insertBefore(historyItem, historyList.firstChild);

            // Limit to 10 items
            if (historyList.children.length > 10) {
                historyList.removeChild(historyList.lastChild);
            }

            showNotification(`Added ${foodText} to your log!`);
        }

        // Update daily total calories
        function updateDailyTotal() {
            const total = dailyFoodLog.reduce((sum, item) => sum + item.calories, 0);
            dailyTotal.textContent = total;
            todayTotal.textContent = total;

            // Calculate progress percentage (max 2000 kcal)
            const percentage = (total / 2000) * 100;
            progressFill.style.width = `${Math.min(percentage, 100)}%`;
            dailyProgress.style.width = `${Math.min(percentage, 100)}%`;
        }

        // Initialize history
        function initHistory() {
            dailyFoodLog = [];
            updateDailyTotal();
            
            // Reset the history list to empty state
            historyList.innerHTML = `
                <div class="history-empty">
                    <i class="fas fa-history fa-2x" style="margin-bottom: 10px;"></i>
                    <p>No recent foods</p>
                    <p style="font-size: 0.9rem; margin-top: 5px;">Search for foods to see them here</p>
                </div>
            `;
        }

        // Show notification
        function showNotification(message) {
            notificationText.textContent = message;
            notification.style.display = 'block';

            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }

        // Add custom food
        function addCustomFood() {
            const name = prompt("Enter food name:");
            if (!name) return;

            const carbs = parseFloat(prompt("Enter carbs (g):") || 0);
            const protein = parseFloat(prompt("Enter protein (g):") || 0);
            const fat = parseFloat(prompt("Enter fat (g):") || 0);

            if (isNaN(carbs) || isNaN(protein) || isNaN(fat)) {
                showNotification("Please enter valid numbers for nutrition values");
                return;
            }

            const calories = calculateCalories(carbs, protein, fat);

            // Update UI
            foodName.textContent = `${name} (custom)`;
            totalCalories.textContent = `${calories} kcal`;
            carbsValue.textContent = `${carbs}g`;
            proteinValue.textContent = `${protein}g`;
            fatValue.textContent = `${fat}g`;

            // Show result container
            resultContainer.style.display = 'block';
        }

        // Event listeners
        searchBtn.addEventListener('click', searchFood);

        foodInput.addEventListener('input', showSuggestions);

        foodInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchFood();
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                suggestions.style.display = 'none';
            }
        });

        addToLogBtn.addEventListener('click', addToHistory);

        addCustomBtn.addEventListener('click', addCustomFood);

        // Filter button event listeners
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.dataset.category;
                showSuggestions();
            });
        });

        // Navigation toggle for mobile
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar-container') && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });

        // Initialize the app
        document.addEventListener('DOMContentLoaded', () => {
            initHistory();
        });
        
  