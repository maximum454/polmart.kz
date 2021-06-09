<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>
<script>

    function compare_tov(id) {
        var chek = document.getElementById('compareid_' + id);
        if (chek.checked) {
            //Добавить
            var AddedGoodId = id;
            $.get("/local/ajax/list_compare.php",
                {
                    action: "ADD_TO_COMPARE_LIST", id: AddedGoodId
                },
                function (data) {
                    $("#compare_list_count").html(data);
                }
            );
        } else {
            //Удалить
            var AddedGoodId = id;
            $.get("/local/ajax/list_compare.php",
                {
                    action: "DELETE_FROM_COMPARE_LIST", id: AddedGoodId
                },
                function (data) {
                    $("#compare_list_count").html(data);
                }
            );
        }
    }
</script>
<div class="catalog-sections-top">
    <div class="card__body">
        <? foreach ($arResult["SECTIONS"] as $arSection): ?>


            <? foreach ($arSection["ITEMS"] as $arElement): ?>
                <?
                $this->AddEditAction($arElement['ID'], $arElement['EDIT_LINK'], CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "ELEMENT_EDIT"));
                $this->AddDeleteAction($arElement['ID'], $arElement['DELETE_LINK'], CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BCST_ELEMENT_DELETE_CONFIRM')));
                ?>

                <? $renderImage = CFile::ResizeImageGet($arElement["PREVIEW_PICTURE"], array("width" => 310, "height" => 232), BX_RESIZE_IMAGE_EXACT, false); ?>
                <article class="card__item" id="<?= $this->GetEditAreaId($arElement['ID']); ?>">
                    <div class="card__img">
                        <a href="<?= $arElement["DETAIL_PAGE_URL"] ?>">
                            <? if (is_array($arElement["PREVIEW_PICTURE"])): ?>
                                <img src="<?= $renderImage["src"] ?>" width="310" height="232" alt="">
                            <? elseif (is_array($arElement["DETAIL_PICTURE"])): ?>
                                <img src="<?= $arElement["DETAIL_PICTURE"]["SRC"] ?>" width="310" height="232" alt="">
                            <? endif ?>
                        </a>
                        <div class="card__label">
                            <? if ($arElement["DISPLAY_PROPERTIES"]["DISCOUNT_VALUE"]): ?>
                                <div class="card__stock">%</div>
                            <? elseif ($arElement["DISPLAY_PROPERTIES"]["HIT"]): ?>
                                <div class="card__hit">HIT</div>
                            <? elseif ($arElement["DISPLAY_PROPERTIES"]["NEW"]): ?>
                                <div class="card__new">NEW</div>
                            <? endif; ?>
                        </div>

                        <? if ($arParams["DISPLAY_COMPARE"]): ?>
                            <?
                            $iblockid = $arElement['IBLOCK_ID'];
                            $id = $arElement['ID'];
                            if (isset($_SESSION["CATALOG_COMPARE_LIST"][$iblockid]["ITEMS"][$id])) {
                                $checked = 'checked';
                            } else {
                                $checked = '';
                            }
                            ?>
                            <script>
                                elem = document.getElementById("compareid_<?=$arElement['ID'];?>")
                                if (elem.hasAttribute("checked")) {
                                    elem.parentElement.setAttribute('class', 'card__compare js-compare active')
                                }
                            </script>
                            <label class="card__compare js-compare" for="compareid_<?= $arElement['ID']; ?>">
                                <input class="js-compare-check" type="checkbox" <?= $checked; ?>
                                       id="compareid_<?= $arElement['ID']; ?>"
                                       onchange="compare_tov(<?= $arElement['ID']; ?>);">
                            </label>
                        <? endif ?>
                        <div>
                            <? if ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '184'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/3.png" alt=""></div>
                            <? elseif ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '177'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/2.png" alt=""></div>
                            <? elseif ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '178'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/11.png" alt=""></div>
                            <? elseif ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '179'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/5.png" alt=""></div>
                            <? elseif ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '180'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/3.png" alt=""></div>
                            <? elseif ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '181'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/8.png" alt=""></div>
                            <? elseif ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '182'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/9.png" alt=""></div>
                            <? elseif ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '183'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/3.png" alt=""></div>
                            <? elseif ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '184'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/3.png" alt=""></div>
                            <? elseif ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '185'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/6.png" alt=""></div>
                            <? elseif ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '186'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/7.png" alt=""></div>
                            <? elseif ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '187'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/10.png" alt=""></div>
                            <? elseif ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '188'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/12.png" alt=""></div>
                            <? elseif ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '189'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/6.png" alt=""></div>
                            <? elseif ($arElement['DISPLAY_PROPERTIES']['COUNTRY']['VALUE_ENUM_ID'] == '190'): ?>
                                <div class="card__country"><img src="<?= $templateFolder ?>/img/14.png" alt=""></div>
                            <? endif ?>
                        </div>
                    </div>
                    <div class="card__txt">
                        <h5 class="card__name"><?= $arElement["NAME"] ?></h5>
                        <div class="card__category">
                            <? foreach ($arElement["DISPLAY_PROPERTIES"] as $pid => $arProperty): ?>
                                <p><b><?= $arProperty["NAME"] ?>:</b>&nbsp;
                                    <? if (is_array($arProperty["DISPLAY_VALUE"]))
                                        echo implode("&nbsp;/&nbsp;", $arProperty["DISPLAY_VALUE"]);
                                    else
                                        echo $arProperty["DISPLAY_VALUE"]; ?></p>
                            <? endforeach ?>
                        </div>
                        <?
                        $price = $arElement["DISPLAY_PROPERTIES"]["PRICE"]["VALUE"];
                        $discount = $arElement["DISPLAY_PROPERTIES"]["DISCOUNT_VALUE"]["VALUE"];
                        ?>
                        <div style="display: none">
                        <?

                        echo "<pre>";
                        print_r($arElement);
                        echo "<pre>";
                        ?>
                        </div>
                        <? foreach ($arElement["PRICES"] as $code => $arPrice): ?>

                            <div class="card__price">
                                <? if (!empty($discount)): ?>
                                    <span class="old"><s><?= $price ?></s> <?= $arElement['DISPLAY_PROPERTIES']['PRICE_FOR']['VALUE'] ?></span>
                                    <div class="new"><?= $price - (($price * $discount) / 100) ?> <?= $arElement['DISPLAY_PROPERTIES']['PRICE_FOR']['VALUE'] ?></div>
                                <? else: ?>
                                    <div class="new"><?= $price ?> <?= $arElement['DISPLAY_PROPERTIES']['PRICE_FOR']['VALUE'] ?></div>
                                <? endif; ?>


                            </div>

                        <? endforeach; ?>

                        <a class="btn btn-outline-primary" href="<?= $arElement["DETAIL_PAGE_URL"] ?>">Подробнее</a>
                    </div>

                </article>
            <? endforeach; // foreach($arResult["ITEMS"] as $arElement):?>

        <? endforeach ?>
    </div>
</div>
