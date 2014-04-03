
var gallery_page=null;if(window.vanity_name)
{gallery_page='vanity_url';}
else if(window.shared_name)
{gallery_page='shared_folder';}
else
{gallery_page='collab_preview';}
var shared_folder_info=null;var box={hist_name:'shared_folder',navigation_shortcuts_enabled:true,nav_element:null,after_load_callback:null,load:function(json)
{var loading=Loading.get();var single_item_id=json.single_item_id;var items=json.nodes;window.items_html=json.html;var navState=Box.Application.getService('nav-state');navState.setSort(json.sort,json.sort_direction);shared_folder_info=json.shared_folder_info;window.list_view=json.view=='expanded'?1:0;if(json.users)Canvas.get().users.set_params(json.users);$('#mod-paging-bottom').empty();if(json.path_html)
{$('#main_path').html(json.path_html).show();}
else
{$('#main_path').empty().hide();}
var automations=Box.Application.getService('automations');if(automations)
{var c=Canvas.get();var user=c.user;if(typeof user!=='undefined'&&user.id!=2)
{automations.getAutomations(shared_folder_info.id);}}
box.init(items);Canvas.get().init_pages(json,box.update_page_callback);loading.destroy();Box.Application.broadcast('x-folderchangeafter',{json:json});if(single_item_id)
{$('#nav_sort').hide();}
if(box.after_load_callback)
{box.after_load_callback();box.after_load_callback=null;}},init:function(items)
{var j_page_nav=$j('#page_nav');var navState=Box.Application.getService('nav-state');if(!navState.isPreviewerOpen())
{j_page_nav.hide();}
var view=window.list_view?'expanded':'icon';$j('.files_view-expanded').removeClass('files_view-expanded-selected');$j('.files_view-icon').removeClass('files_view-icon-selected');$j('.files_view-'+view).addClass('files_view-'+view+'-selected');if(shared_folder_info.permissions)
{shared_folder_info.granted_permissions=shared_folder_info.permissions;}
Canvas.get().reset();Canvas.get().load({items_html:window.items_html,background:false,nodes:items,shared_name:shared_name,vanity_name:vanity_name,use_menu_shortcuts:true,use_item_expansion:{comments:true,tasks:false},view:view,folder:shared_folder_info});var j_item_collection=$j('#files').find('.item_collection');if(view!='expanded')
{j_item_collection.removeClass('list_view');}
else
{j_item_collection.removeClass('icon_view');}
j_item_collection.addClass(Canvas.get().construct_collection_classes());if(items.length===0)
{$j('#tpl_empty_folder').show();j_page_nav.children().hide();if(navState.isEmbedWidget())
{j_page_nav.find('#nav_upload_item, #create_item_button').show();}
j_page_nav.show();}
else
{$j('#tpl_empty_folder').hide();var state=navState.get();if(state.sort=='name')
{$j('#current_sort_type').text($t('Name','js_sort_myfiles_label_name'));}
else if(state.sort=='date')
{$j('#current_sort_type').text($t('Date','js_sort_myfiles_label_date'));}
else if(state.sort=='size')
{$j('#current_sort_type').text($t('Size','js_sort_myfiles_label_size'));}
j_page_nav.children().andSelf().show();}
if(navState.isPreviewerOpen())
{if($j('.item_expansion_comments').length)$j('.item_expansion_comments')[0].style.display='none';}
if(shared_folder_info)box.show_sidebar();$j('#content_sidebar').show();var old_callback=null;if(typeof box.after_load_callback=='function')
{old_callback=box.after_load_callback;}
box.after_load_callback=function call_fix_page_ui_issues()
{if(old_callback)old_callback();Canvas.get().fix_page_ui_issues();};},show_sidebar:function()
{if(!shared_folder_info.owner)
{$j('#sidebar_created_by_part').hide();}
else
{$j('#sidebar_folder_info_owner').text(shared_folder_info.owner);$j('#sidebar_created_by_part').show();}
$j('#sidebar_folder_info_date').text(shared_folder_info.created);$j('#sidebar_folder_info_files').text(shared_folder_info.file_count);$j('#sidebar_folder_info_size').text(shared_folder_info.size);$j('#sidebar_folder_info_files_text').text(' files, ');if(shared_folder_info.file_count==1)
{$j('#sidebar_folder_info_files_text').text(' file, ');}
$j('#sidebar_folder_info').show();},join_public_folder:function(name,type)
{var query;if(type=='vanity_name')
{query={vanity_name:vanity_name};}
else if(type=='shared_name')
{query={shared_name:shared_name};}
else
{query={collab_invite_token:name};}
var q=$j.box.formatQuery(query);var url='/index.php?rm=box_join_public_folder';$j.postJSON(url,q,function(json)
{if(json.error&&json.error=='folder_closed')
{Box.Application.getService('popups').alert($t('The owner of the folder has set the folder membership to closed','js_owner_set_membership_to_closed'));}
else
{var location_url='/files/0/f/'+json.result;var url_service=Box.Application.getService('url');url_service.goToUrl(location_url);}
return;});},update_page_callback:function(page)
{var navState=Box.Application.getService('nav-state');navState.set({page:page});Box.Application.navigate('');},init_shared_folder_page_controller:function()
{new Canvas({element:'#canvas',in_account:false,shared_name:window.shared_name,vanity_name:window.vanity_name,collab_invite_token:window.collab_invite_token});var unidb=Box.Application.getService('unidb');if(unidb.isUniDB(first_load))
{first_load=unidb.decode(first_load);}
Box.Application.navigate(window.location.pathname,{},{preloadedResults:first_load});first_load=null;$j(document.body).bind('contextmenu',function(e){if($j(e.target).is('input[type=text]'))return;return false;});},initialize_nav_element:function()
{this.nav_element=$('#item-list li:first').addClass('nav_selected');},keyboard_navigation_enabled:function()
{return this.nav_element!=null;}};Loader.t3Loaded.done(function()
{box.init_shared_folder_page_controller();});Box.Application.addService('shared-items',function(application){'use strict';return{getItemsList:function(params){var url='/index.php?rm=box_shared_folder_list',query,deferred,promise;query={id:params.folderTypedId,page_num:params.page-1,page_size:params.pageSize,shared_name:params.sharedName,sort:params.sort,direction:params.sortDirection,view:params.view};if(params.preloadedResults){deferred=$.Deferred();deferred.resolve(params.preloadedResults);promise=deferred.promise();}else{promise=$.getJSON(url,$.box.formatQuery(query));}
return promise;}};});