import { Injectable } from '@angular/core';
import { PageItem } from "app/page-item";
import { DogsComponent } from "app/dogs-profile/dogs.component";
import { PlayerComponent } from "app/player-profile/player.component";


@Injectable()
export class PageService {
  dogs: Array<any>;

  getPages() {
    this.dogs = [
      { name: 'Crookshanks', breed: 'Beagle', description: 'is a breed of small hound, similar in appearance to the much larger foxhound. The Beagle is a scent hound, developed primarily for hunting hare.', image: 'http://petful.supercopyeditors.netdna-cdn.com/wp-content/uploads/2016/10/beagle-2-e1477146504818.jpg' },
      { name: 'Rex', breed: 'Labrador Retriever', description: ', also Labrador, is a type of retriever-gun dog. The Labrador is one of the most popular breeds of dog in the United Kingdom and the United States.', image: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/labrador-retriever-dog-breed-pictures/labrador-retriever-dog-pictures-6.jpg' },
      { name: 'Fatty', breed: 'Bulldog', description: 'is a medium-sized breed of dog commonly referred to as the English Bulldog or British Bulldog. Other Bulldog breeds include the American Bulldog, Old English Bulldog, Leavitt Bulldog, Olde English Bulldogge, and the French Bulldog.', image: 'http://cdn.akc.org/akcdoglovers/Bulldog_hero_-_Copy.jpg' },
      { name: 'Smelly', breed: 'Pug', description: 'is a breed of dog with physically distinctive features of a wrinkly, short-muzzled face, and curled tail', image: 'https://vetstreet.brightspotcdn.com/dims4/default/10dae76/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F3a%2F54%2F5ae8bfcc41b381c27a792e0dd891%2FAP-KWDHXS-645sm8113.jpg' },
      { name: 'Curly', breed: 'Poodle', description: 'The poodle is a group of formal dog breeds, the Standard Poodle, Miniature Poodle and Toy Poodle.', image: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/poodle-dog-breed-pictures/threequarters-4.jpg' },
      { name: 'Skywalker', breed: 'Doberman Pinscher', description: 'is a medium-large breed of domestic dog originally developed around 1890 by Karl Friedrich Louis Dobermann', image: 'http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/doberman-pinscher_04_lg.jpg' },
      { name: 'Victor', breed: 'Yorkshire Terrier', description: 'is a small dog breed of terrier type, developed during the 19th century in Yorkshire, England, to catch rats in clothing mills.', image: 'http://cdn.akc.org/content/article-body-image/yorkshire-terrier-cover.jpg' },
      { name: 'Joseph', breed: 'American Pit Bull Terrier', description: 'is the common name for a type of dog.', image: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-2.jpg' },
    ]
    return [
      new PageItem(DogsComponent, { data: this.dogs }),
      new PageItem(PlayerComponent, {})
    ];
  }
}
