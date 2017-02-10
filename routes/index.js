
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'projects': [
      { 'name': 'Ellen T.',
        'image': 'imgres.jpg',
        'id': 'project1'
      },
      { 'name': 'Mark S.',
        'image': 'images.png',
        'id': 'project2'
      },
      { 'name': 'Arnold W.',
        'image': 'imgres-1.jpg',
        'id': 'project3'
      },
      { 'name': 'Kasey M.',
        'image': 'imgres-2.jpg',
        'id': 'project4'
      },
      { 'name': 'Ted R.',
        'image': 'imgres-3.jpg',
        'id': 'project5'
      },
      { 'name': 'Jamie S.',
        'image': 'imgres-4.jpg',
        'id': 'project6'
      },
      { 'name': 'Kara N.',
        'image': 'imgres.png',
        'id': 'project7'
      },
      { 'name': 'Madison E.',
        'image': 'imgres-5.jpg',
        'id': 'project8'
      }
    ]
  });
};
