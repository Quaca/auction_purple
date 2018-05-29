package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "item_photo")
public class ItemPhoto {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private UUID id;

    @Column(name = "item_id")
    private UUID itemId;

    @Column(name = "photo_path")
    private String photoPath;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getItem_id() {
        return itemId;
    }

    public void setItem_id(UUID item_id) {
        this.itemId = item_id;
    }

    public String getPhotoPath() {
        return photoPath;
    }

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }
}
