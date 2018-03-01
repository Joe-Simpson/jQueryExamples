$(document).ready( () => {


	/**
	*	Below are some examples of event listeners
	*/

	//On mouse click
	const $clickExampleButton = $('.click-example-button');
	const $clickExampleImage = $('.click-example-image');
	$clickExampleButton.on('click', () => {
		$clickExampleImage.toggle();
	});

	//On mouse enter (over a particular page element)
	const $mouseEnterLeaveExample = $('.mouse-enter-leave-example');
	const $mouseEnterLeaveExampleTarget = $('.mouse-enter-leave-example-target');
	$mouseEnterLeaveExample.on('mouseenter', () => {
		$mouseEnterLeaveExampleTarget.show();
	});

	//On mouse leave (over a particular page element)
	$mouseEnterLeaveExample.on('mouseleave', () => {
		$mouseEnterLeaveExampleTarget.hide();
	});



	/**
	*	Below are some examples of generic call back functions
	*/	
	const $showHideToggleExampleImage = $('.show-hide-toggle-example-image');
	//show
	const $showExampleButton = $('.show-example-button');
	$showExampleButton.on('click', () => {
		$showHideToggleExampleImage.show();
	})
	//hide
	const $hideExampleButton = $('.hide-example-button');
	$hideExampleButton.on('click', () => {
		$showHideToggleExampleImage.hide();
	})
	//toggle
	const $toggleExampleButton = $('.toggle-example-button');
	$toggleExampleButton.on('click', () => {
		$showHideToggleExampleImage.toggle();
	})

	const $fadeinFadeoutFadetoggleExampleImage = $('.fadein-fadeout-fadetoggle-example-image');
	//fadeIn
	const $fadeinExampleButton = $('.fadein-example-button');
	$fadeinExampleButton.on('click', () => {
		$fadeinFadeoutFadetoggleExampleImage.fadeIn();
	})
	//fadeOut
	const $fadeoutExampleButton = $('.fadeout-example-button');
	$fadeoutExampleButton.on('click', () => {
		$fadeinFadeoutFadetoggleExampleImage.fadeOut(200);
	})
	//fadeToggle
	const $fadetoggleExampleButton = $('.fadetoggle-example-button');
	$fadetoggleExampleButton.on('click', () => {
		$fadeinFadeoutFadetoggleExampleImage.fadeToggle(200);
	})

	const $slideupSlidedownSlidetoggleExampleImage = $('.slideup-slidedown-slidetoggle-example-image');
	//slideUp
	const $slideupExampleButton = $('.slideup-example-button');
	$slideupExampleButton.on('click', () => {
		$slideupSlidedownSlidetoggleExampleImage.slideUp(300);
	})
	//slideOut
	const $slidedownExampleButton = $('.slidedown-example-button');
	$slidedownExampleButton.on('click', () => {
		$slideupSlidedownSlidetoggleExampleImage.slideDown(200);
	})
	//slideToggle
	const $slidetoggleExampleButton = $('.slidetoggle-example-button');
	$slidetoggleExampleButton.on('click', () => {
		$slideupSlidedownSlidetoggleExampleImage.slideToggle(200);
	})


	//css
	const $cssExampleTarget = $('.css-example-target');
	const $cssExampleButton1 = $('.css-example-button1');
	$cssExampleButton1.on('click', () => {
		$cssExampleTarget.css({
			color:'#535353'
		});
	})
	const $cssExampleButton2 = $('.css-example-button2');
	$cssExampleButton2.on('click', () => {
		$cssExampleTarget.css({
			color:'#4286f4'
		});
	})
	const $cssExampleButton3 = $('.css-example-button3');
	$cssExampleButton3.on('click', () => {
		$cssExampleTarget.css({
			color:'#47f441'
		});
	})
	const $cssExampleButton4 = $('.css-example-button4');
	$cssExampleButton4.on('click', () => {
		$cssExampleTarget.css({
			color:'#212529'
		});
	})

	//animate
	const $animateExampleTarget = $('.animate-example-target');
	const $animateExampleButton1 = $('.animate-example-button1');
	$animateExampleButton1.on('click', () => {
		$animateExampleTarget.animate({
			fontSize:'12px'
		}, 500);
	})
	const $animateExampleButton2 = $('.animate-example-button2');
	$animateExampleButton2.on('click', () => {
		$animateExampleTarget.animate({
			fontSize:'24px'
		}, 750);
	})
	const $animateExampleButton3 = $('.animate-example-button3');
	$animateExampleButton3.on('click', () => {
		$animateExampleTarget.animate({
			fontSize:'36px'
		}, 1000);
	})
	const $animateExampleButton4 = $('.animate-example-button4');
	$animateExampleButton4.on('click', () => {
		$animateExampleTarget.animate({
			fontSize:'16px'
		}, 10);
	})


	const $addclassRemoveclassToggleclassExampleImage = $('.addclass-removeclass-toggleclass-example-image');
	//addClass
	const $addclassExampleButton = $('.addclass-example-button');
	$addclassExampleButton.on('click', () => {
		$addclassRemoveclassToggleclassExampleImage.addClass('addclass-removeclass-toggleclass-example');
	})
	//slideOut
	const $removeclassExampleButton = $('.removeclass-example-button');
	$removeclassExampleButton.on('click', () => {
		$addclassRemoveclassToggleclassExampleImage.removeClass('addclass-removeclass-toggleclass-example');
	})
	//slideToggle
	const $toggleclassExampleButton = $('.toggleclass-example-button');
	$toggleclassExampleButton.on('click', () => {
		$addclassRemoveclassToggleclassExampleImage.toggleClass('addclass-removeclass-toggleclass-example');
	})


	//currentTarget
	//with Chained Events
	const $currenttargetExampleTarget = $('.currenttarget-example-target');
	$currenttargetExampleTarget.on('mouseenter', event => {
		$(event.currentTarget).addClass('active');
	}).on('mouseleave', event => {
		$(event.currentTarget).removeClass('active');
	})

	//targeting children
	const $kids = $('.targetchildren-example-parent').children();
	$('.targetchildren-example-parent').on('mouseenter', () => {
		$kids.addClass('active');
	}).on('mouseleave', () => {
		$kids.removeClass('active');
	})
	
	//targeting parents
	const $parent = $('.targetparent-example-child').parent();
	$('.targetparent-example-child').on('mouseenter', () => {
		$parent.addClass('active');
	}).on('mouseleave', () => {
		$parent.removeClass('active');
	})

	//targeting siblings
	const $targetsiblingsExample = $('.targetsiblings-example');
	$targetsiblingsExample.on('click', event => {
		$(event.currentTarget).siblings().removeClass('active');
		$(event.currentTarget).addClass('active');
	});

});