package contacts;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class ContactController {

	private ContactRespository contactRepository;

	@Autowired
	public ContactController(ContactRespository contactRepository) {
		this.contactRepository = contactRepository;
	}

	@RequestMapping(method = RequestMethod.GET)
	public String home(Map<String, Object> model) {
		List<Contact> contacts = contactRepository.findAll();
		model.put("contacts", contacts);
		return "home";
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public String submit(Contact contact, Map<String, Object> model) {
		contactRepository.save(contact);
		return "redirect:/";
	}

}
