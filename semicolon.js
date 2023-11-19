const franch = document.querySelector('.franch')
const first = document.querySelector('.popup_type_first')

const legs = document.querySelector('.legs')
const second = document.querySelector('.popup_type_second')

const skate = document.querySelector('.skate')
const third = document.querySelector('.popup_type_third')

const lava = document.querySelector('.lava')
const fourth = document.querySelector('.popup_type_fourth')

const candle = document.querySelector('.candle')
const fifth = document.querySelector('.popup_type_fifth')

const door = document.querySelector('.door')
const sixth = document.querySelector('.popup_type_sixth')

const sky = document.querySelector('.sky')
const seventh = document.querySelector('.popup_type_seventh')

const paints = document.querySelector('.paints')
const kasta = document.querySelector('.popup_type_kasta')

function openPopup(popup) {
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
        popup.classList.remove('popup_opened')
}

function setEventListeners(popup) {
        popup.addEventListener('click', (evt) => {
            if (evt.currentTarget === evt.target) {
            closePopup(popup)
            }
        })
    }

franch.addEventListener('click', () => openPopup(first))
setEventListeners(first)

legs.addEventListener('click', () => openPopup(second))
setEventListeners(second)

skate.addEventListener('click', () => openPopup(third))
setEventListeners(third)

lava.addEventListener('click', () => openPopup(fourth))
setEventListeners(fourth)

candle.addEventListener('click', () => openPopup(fifth))
setEventListeners(fifth)

door.addEventListener('click', () => openPopup(sixth))
setEventListeners(sixth)

sky.addEventListener('click', () => openPopup(seventh))
setEventListeners(seventh)

paints.addEventListener('click', () => openPopup(kasta))
setEventListeners(kasta)